import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tooltip } from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const TooltipWithContext = () => {
  return (
    <div style={{position: "relative"}}>
      Hover over me
      <Tooltip label="Tooltip" />
    </div>
  );
}

export const Top: Story = {
  args: {
    label: 'Tooltip top',
  },
  render: TooltipWithContext
};
