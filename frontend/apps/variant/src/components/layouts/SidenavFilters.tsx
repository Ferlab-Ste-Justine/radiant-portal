import { FilterList } from "@/components/feature/QueryFilters/FilterList";
import { useConfig } from "@/components/model/applications-config";
import { QueryBuilderState } from "@/components/model/query-builder-core/query-builder";

interface IProps {
  state?: QueryBuilderState;
}

function SidenavFilters({ state }: IProps) {
  const config = useConfig();
  console.log("state in SidenavFilters", state);
  return (
    <aside>
      <FilterList fields={config.variant_entity.aggregations} />
    </aside>
  );
}

export default SidenavFilters;
