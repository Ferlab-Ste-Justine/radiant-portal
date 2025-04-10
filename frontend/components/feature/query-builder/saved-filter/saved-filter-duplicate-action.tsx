import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/base/ui/tooltip';
import { CopyIcon } from 'lucide-react';
import { useQueryBuilderContext, useQueryBuilderDictContext } from '../query-builder-context';
import { openOverwriteSavedFilterAlert } from '../alerts';
import { Button } from '@/components/base/ui/button';

function SavedFiltersDuplicateAction() {
  const dict = useQueryBuilderDictContext();
  const { queryBuilder } = useQueryBuilderContext();

  const selectedSavedFilter = queryBuilder.getSelectedSavedFilter();

  const handleDuplicate = function () {
    if (selectedSavedFilter?.isDirty()) {
      openOverwriteSavedFilterAlert(queryBuilder, dict);
    } else {
      selectedSavedFilter?.duplicate();
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">
          <Button
            iconOnly
            variant="ghost"
            size="sm"
            disabled={selectedSavedFilter?.isNew() || !selectedSavedFilter}
            onClick={handleDuplicate}
          >
            <CopyIcon />
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>{dict.savedFilter.duplicateTooltip}</TooltipContent>
    </Tooltip>
  );
}

export default SavedFiltersDuplicateAction;
