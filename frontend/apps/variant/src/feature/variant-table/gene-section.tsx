import { useI18n } from '@/components/hooks/i18n';
import DetailSection, { DetailItem } from './detail-section';

export default function GeneSection() {
  const { t } = useI18n();

  return (
    <DetailSection title={t('occurrenceDetailSections.gene.title')}>
      <DetailItem title={t('occurrenceDetailSections.gene.pli')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.gene.loeuf')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.gene.spliceAi')} value="-" />
    </DetailSection>
  );
}
