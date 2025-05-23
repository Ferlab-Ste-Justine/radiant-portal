import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { queryBuilderRemote } from '@/components/model/query-builder-core/query-builder-remote';
import { ToggleFilter } from '@/components/feature/query-filters/toggle-filter';
import { ConfigProvider, PortalConfig } from '@/components/model/applications-config';

const config: PortalConfig = {
  variant_exploration: {
    app_id: 'variant_exploration_toggle_filter',
    aggregations: [
      { key: 'chromosome', type: 'multiple' },
      { key: 'filter', type: 'multiple' },
      { key: 'zygosity', type: 'multiple' },
      { key: 'impact_score', type: 'multiple' },
      { key: 'variant_class', type: 'multiple' },
      { key: 'symbol', type: 'multiple' },
    ],
  },
};

const meta = {
  title: 'Feature/Query Filters/Toggle Filter',
  component: ToggleFilter,

  args: {
    data: [],
    field: { key: 'chromosome', type: 'boolean' },
  },
  decorators: [
    Story => (
      <ConfigProvider config={config}>
        <Story />
      </ConfigProvider>
    ),
  ],
} satisfies Meta<typeof ToggleFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        key: 'true',
        count: 10030,
      },
      {
        key: 'false',
        count: 200,
      },
    ],
  },
  render: args => {
    return (
      <div className="space-y-6">
        <ToggleFilter {...args} />
      </div>
    );
  },
};

export const DataAppliedToQueryBuilder: Story = {
  args: {
    data: [
      {
        key: 'Option6',
        count: 600,
      },
      {
        key: 'Option5',
        count: 500,
      },
    ],
  },
  render: args => {
    action('activeQuery')(
      queryBuilderRemote.updateActiveQueryField(config.variant_exploration.app_id, {
        field: 'chromosome',
        value: ['true'],
      }),
    );
    return (
      <div className="space-y-6">
        <ToggleFilter {...args} />
      </div>
    );
  },
};
