import { css } from '@emotion/css'
import CommonCursor from './index.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof CommonCursor> = {
  title: 'lib/Cursors/Common',
  component: CommonCursor,
};

export default meta;

type Story = StoryObj<typeof CommonCursor>;

export const Primary: Story = {
  render: () => ({
    components: { CommonCursor },
    template: '<CommonCursor />',
  }),
};

export const Colorize: Story = {
  render: () => ({
    components: { CommonCursor },
    computed: {
      styles () {
        return {
          container: css`
            height: 100vh;
            width: 100vw;
            background-color: rgb(
              calc(var(--cursor-x) * 255),
              calc(var(--cursor-y) * 255),
              255
            );

            #cursor {
              background-color: transparent;
              pointer-events: none;
            }
          `,
        }
      }
    },
    template: `
      <div :class="styles.container">
        <CommonCursor />
      </div>
    `,
  }),
};

export const TextDraggable: Story = {
  render: () => ({
    components: { CommonCursor },
    computed: {
      styles () {
        return {
          container: css`
            display: flex;
            align-items: center;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;

            #cursor {
              background-color: transparent;
              pointer-events: none;
            }
          `,
          text_container: css`
            transform: translate3d(
              calc(var(--cursor-x) * -20%),
              calc(var(--cursor-y) * -40%),
              0
            );
            will-change: transform;
          `,
          text: css`
            font-size: 4rem;
          `
        }
      }
    },
    template: `
      <div :class="styles.container">
        <div :class="styles.text_container">
          <span :class="styles.text">
            SOME TEXT
          </span>
        </div>

        <CommonCursor />
      </div>
    `,
  }),
};
