import { AutoCompleteTerm } from '@/api/api';

function MondoOptionItemLabel({ mondo }: { mondo: AutoCompleteTerm }) {
  return (
    <div>
      {mondo.highlight?.name ? (
        <span
          className="capitalize [&>strong]:font-normal [&>strong]:bg-primary/35"
          dangerouslySetInnerHTML={{ __html: mondo.highlight.name }}
        />
      ) : (
        <span>{mondo.source?.name}</span>
      )}{' '}
      {mondo.highlight?.id ? (
        <span className="[&>strong]:font-normal [&>strong]:bg-blue-200">
          (<span dangerouslySetInnerHTML={{ __html: mondo.highlight.id }} />)
        </span>
      ) : (
        <span>({mondo.source?.id})</span>
      )}
    </div>
  );
}

export default MondoOptionItemLabel;
