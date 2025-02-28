import QueryPillContainer from "./query-pill-container";
import QueryPillValuesContainer from "./query-pill-values-container";
import {
  QueryPillLabelContainer,
  QueryPillOperatorContainer,
} from "./query-pill-label-operator";
import capitalize from "lodash/capitalize";
import { IValueFilter } from "@/components/model/sqon";
import ElementOperatorIcon from "@/components/base/icons/element-operator-icon";
import QueryPillValues from "./query-pill-values";
import { useQueryBarContext } from "../query-bar/query-bar-context";
import { useQueryBuilderDictContext } from "../query-builder-context";

export type QueryPillSetProps = {
  valueFilter: IValueFilter;
};

function QueryPillSet({ valueFilter }: QueryPillSetProps) {
  const { query } = useQueryBarContext();
  const dict = useQueryBuilderDictContext();

  return (
    <QueryPillContainer
      onRemovePill={function () {
        query.removePillByFieldOrIndex(valueFilter.content.field);
      }}
    >
      <div className="flex items-center">
        <QueryPillLabelContainer>
          {valueFilter.content.index
            ? capitalize(valueFilter.content.index)
            : dict.queryPill.facet(valueFilter.content.field)}
        </QueryPillLabelContainer>
        <QueryPillOperatorContainer>
          <ElementOperatorIcon size={14} />
        </QueryPillOperatorContainer>
      </div>
      <QueryPillValuesContainer>
        <QueryPillValues valueFilter={valueFilter} />
      </QueryPillValuesContainer>
    </QueryPillContainer>
  );
}

export default QueryPillSet;
