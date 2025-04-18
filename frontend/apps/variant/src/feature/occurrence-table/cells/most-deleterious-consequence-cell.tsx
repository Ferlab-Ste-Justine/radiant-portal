import { getImpactBadge } from '../utils';
import EmptyCell from '@/feature/occurrence-table/cells/empty-cell';
import { cn } from '@/components/lib/utils';
import { useI18n } from '@/components/hooks/i18n';
import { OccurrenceVepImpactEnum } from '@/api/api';

type MostDeleteriousConsequenceCellProps = {
  vepImpact?: OccurrenceVepImpactEnum;
  consequences?: string[];
  aaChange?: string;
};

/**
 * Only show the most deleterious consequence out of all the consequences for the variant
 * Order of display:
 * 1) vep_impact displayed with an icon (red triangle, circle, etc.., use existing mechanism)
 * 2) consequence displayed in text (e.g., Stop Gained, Intron variant, etc.) Follow this formatting for the values.
 *    @dico.snv.consequences.consequences
 * 3) “-”
 * 4) aa_Change, displayed in text for the Amino Acid change
 * e.g. [VEP icon] Missense - p.Ter250Arg
 *
 * @fixme aa_change is empty in api at the moment
 */
function MostDeleteriousConsequenceCell({ vepImpact, consequences, aaChange }: MostDeleteriousConsequenceCellProps) {
  const { t } = useI18n();

  if (vepImpact === undefined || consequences === undefined) return <EmptyCell />;

  return (
    <div className={cn('flex items-center gap-2')}>
      {getImpactBadge(vepImpact)} {t(`consequences.${consequences[0]}`)}
      {aaChange && ` - ${aaChange}`}
    </div>
  );
}

export default MostDeleteriousConsequenceCell;
