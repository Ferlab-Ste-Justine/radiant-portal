import "./App.css";
import styles from "./App.module.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/base/ui/accordion";
import QueryBuilder from "components/composite/QueryBuilder";
import { Table } from "components/base/ui/table/table";
import { variants } from "./include_variant_mock";
import {
  columns,
  userSettings,
  defaultSettings,
} from "./include_variant_table";
import { IVariantEntity } from "@/variant_type";

export interface AppProps {
  api: string;
}

function App({ api }: AppProps) {
  console.log(api);
  return (
    <div className={styles.appLayout}>
      <aside>
        <ul>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 1</AccordionTrigger>
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

      <main className="flex-1 p-4 h-full space-y-6">
        <h1 className="text-2xl font-bold">Variant</h1>
        <QueryBuilder
          id=""
          fetchQueryCount={async () => 0}
          getResolvedQueryForCount={async () => 0}
        />
        <Table
          columns={columns}
          defaultColumnSettings={defaultSettings}
          data={variants.data}
          total={variants.total}
          columnSettings={userSettings}
          subComponent={(data: IVariantEntity) => {
            return (
              <pre style={{ fontSize: "10px" }}>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            );
          }}
        />
      </main>
    </div>
  );
}

export default App;
