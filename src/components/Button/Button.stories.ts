import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        priority: 'primary',
        label: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        priority: 'secondary',
        label: 'Button',
    },
}

export const Tertiary: Story = {
    args: {
        priority: 'tertiary',
        label: 'Button',
    },
}

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
}
