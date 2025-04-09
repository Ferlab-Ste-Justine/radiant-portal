import { useI18n } from '@/components/hooks/i18n';
import DetailSection, { DetailItem } from './detail-section';

export default function PredictionScoreSection() {
  const { t } = useI18n();

  return (
    <DetailSection title={t('occurrenceDetailSections.functionalScores.title')}>
      <DetailItem title={t('occurrenceDetailSections.functionalScores.sift')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.functionalScores.revel')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.functionalScores.fathmm')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.functionalScores.caddRaw')} value="-" />
      <DetailItem title={t('occurrenceDetailSections.functionalScores.caddPhred')} value="-" />
    </DetailSection>
  );
}
