import { getOccurrencesApi } from "~/utils/api.server";
import type { Route } from "./+types/occurrences";
import { AxiosError, HttpStatusCode } from "axios";

export function action({ request }: Route.ActionArgs) {
  console.log('action', request);
  switch (request.method) {
    case "POST":
      return fetchOccurencesCount(request);
  }
}

const fetchOccurencesCount = async (request: Request) => {
  console.log('fetching occurences count', request);
  const body = await request.json();
  const occurenceApi = await getOccurrencesApi(request);
  try {
    const response = await occurenceApi.countOccurrences(
      body.seqId,
      body.countBody
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return new Response(JSON.stringify(error.response?.data), {
        status: error.response?.status || HttpStatusCode.InternalServerError,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(JSON.stringify(error), {
        status: HttpStatusCode.InternalServerError,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
};
