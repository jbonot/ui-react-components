import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ITooltipProps, Tooltip } from './Tooltip'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

const TooltipWithContext = (args: ITooltipProps) => {
    return <Tooltip {...args}>Hover over me</Tooltip>
}

export const Top: Story = {
    args: {
        label: 'Tooltip top',
        position: 'top',
    },
    render: TooltipWithContext,
}

export const Bottom: Story = {
    args: {
        label: 'Tooltip bottom',
        position: 'bottom',
    },
    render: TooltipWithContext,
}

export const Left: Story = {
    args: {
        label: 'Tooltip left',
        position: 'left',
    },
    render: TooltipWithContext,
}

export const Right: Story = {
    args: {
        label: 'Tooltip right',
        position: 'right',
    },
    render: TooltipWithContext,
}
