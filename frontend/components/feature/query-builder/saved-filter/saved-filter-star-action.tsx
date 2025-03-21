import { IconButton } from "@/components/base/Buttons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";
import { StarIcon } from "lucide-react";
import {
  useQueryBuilderContext,
  useQueryBuilderDictContext,
} from "../query-builder-context";
import { SavedFilterTypeEnum } from "@/components/model/saved-filter";

function SavedFiltersStarAction() {
  const dict = useQueryBuilderDictContext();
  const { queryBuilder, enableFavorite } = useQueryBuilderContext();

  const selectedSavedFilter = queryBuilder.getSelectedSavedFilter();

  if (!enableFavorite) {
    return null;
  }

  const handleStar = function () {
    if (selectedSavedFilter) {
      selectedSavedFilter.save(SavedFilterTypeEnum.Filter, {
        favorite: !selectedSavedFilter.isFavorite(),
      });
    } else {
      queryBuilder.saveNewFilter({ favorite: true });
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          icon={StarIcon}
          iconClassName={
            selectedSavedFilter?.isFavorite()
              ? "stroke-gold-500 fill-gold-500"
              : ""
          }
          disabled={!selectedSavedFilter}
          onClick={handleStar}
        />
      </TooltipTrigger>
      <TooltipContent>
        {selectedSavedFilter?.isFavorite()
          ? dict.savedFilter.favoriteTooltip.unset
          : dict.savedFilter.favoriteTooltip.set}
      </TooltipContent>
    </Tooltip>
  );
}

export default SavedFiltersStarAction;
