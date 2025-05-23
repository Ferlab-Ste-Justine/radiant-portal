import { Button } from '@/components/base/ui/button';
import { useQueryBuilderContext, useQueryBuilderDictContext } from '../query-builder-context';
import { BooleanOperators } from '@/components/model/sqon';
import { PlusIcon } from 'lucide-react';

function QueryToolbarAddAction() {
  const dict = useQueryBuilderDictContext();
  const { queryBuilder } = useQueryBuilderContext();

  if (queryBuilder.canCombine()) {
    return null;
  }

  return (
    <Button
      size="xs"
      disabled={queryBuilder.hasEmptyQuery()}
      onClick={() =>
        queryBuilder.createQuery({
          op: BooleanOperators.And,
          content: [],
        })
      }
    >
      <PlusIcon />
      {dict.toolbar.newQuery}
    </Button>
  );
}

export default QueryToolbarAddAction;
