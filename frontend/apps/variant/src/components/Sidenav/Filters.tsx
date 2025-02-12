import { CountBody, Occurrence, SortBodyOrderEnum, SqonOpEnum, OccurrencesApiFp } from "@/api/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/base/ui/accordion";
import { MultiSelect } from "@/components/feature/QueryFilters/MultiSelect";

import useSWR from "swr";
import { axiosClient } from "@/utils/axios";

type OccurrenceInput = {
  seqId: string;
  countBody: CountBody;
};

const fetcher = (input: OccurrenceInput) => {
  return axiosClient.post(`/occurrences/counts`, input).then((res) => res.data);
}

function SidenavFilters() {
  const { data } = useSWR<Occurrence[], any, OccurrenceInput>(
    {
      seqId: "5011",
      countBody: {
        sqon: {
          field: "impact_score",
          op: SqonOpEnum.In,
          value: [4],
        },
      },
    },
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  //const filters = data || [];
  console.log(data);
  return (
      <aside>
        <ul>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>MultiSelect</AccordionTrigger>
                <AccordionContent>
                   <MultiSelect /> 
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 2</AccordionTrigger>
                <AccordionContent>
                  <input
                    type="checkbox"
                    id="aggre1"
                    name="aggre1"
                    value="Aggre1"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 3</AccordionTrigger>
                <AccordionContent>
                  <input
                    type="checkbox"
                    id="aggre1"
                    name="aggre1"
                    value="Aggre1"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </aside>
  );
}

export default SidenavFilters;
