import { useQueryBarContext } from "./query-bar-context";
import { Checkbox } from "@/components/base/ui/checkbox";

function QueryBarSelector() {
  const { query } = useQueryBarContext();

  if (query.isSelectable()) {
    return (
      <div
        className="
      flex gap-2 items-center py-2 px-4 border-l border-t border-b 
      border-gray-400 bg-gray-100
      group-data-[query-active=true]/query:border-[--query-bar-border-color-active]
      group-data-[query-active=true]/query:bg-[--query-bar-bg-active]
      "
      >
        <Checkbox
          size="sm"
          checked={query.isSelected()}
          onClick={(e) => {
            e.stopPropagation();
            query.toggleSelect(!query.isSelected());
          }}
        />
        <span className="text-xs font-medium">Q{query.index() + 1}</span>
      </div>
    );
  }

  return null;
}

export default QueryBarSelector;
