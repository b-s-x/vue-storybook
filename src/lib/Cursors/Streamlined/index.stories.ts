import StreamlinedCursor from './index.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof StreamlinedCursor> = {
  title: 'lib/Cursors/Rect',
  component: StreamlinedCursor,
};

export default meta;

type Story = StoryObj<typeof StreamlinedCursor>;

export const Primary: Story = {
  render: () => ({
    components: { StreamlinedCursor },
    template: '<StreamlinedCursor />',
  }),
};

