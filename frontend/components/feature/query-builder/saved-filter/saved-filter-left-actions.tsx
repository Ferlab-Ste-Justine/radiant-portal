import { cn } from '@/components/lib/utils';
import React from 'react';
import SavedFiltersEditAction from './saved-filter-edit-action';
import SavedFiltersUndoAction from './saved-filter-undo-action';
import SavedFiltersStarAction from './saved-filter-star-action';
import { useQueryBuilderContext } from '../query-builder-context';

function SavedFiltersLeftActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { queryBuilder } = useQueryBuilderContext();

  const selectedSavedFilter = queryBuilder.getSelectedSavedFilter();

  return (
    <div
      className={cn('flex items-center gap-4 whitespace-nowrap text-ellipsis overflow-hidden', className)}
      {...props}
    >
      <div className="text-ellipsis overflow-hidden text-base">
        {selectedSavedFilter ? selectedSavedFilter.raw().title : queryBuilder.coreProps.savedFilterDefaultTitle}
      </div>
      <div className="flex items-center" onClick={e => e.stopPropagation()}>
        <SavedFiltersEditAction />
        <SavedFiltersStarAction />
        <SavedFiltersUndoAction />
      </div>
    </div>
  );
}

export default SavedFiltersLeftActions;
