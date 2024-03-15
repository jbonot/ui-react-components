import type { Meta, StoryObj } from '@storybook/react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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

export const Default: Story = {
    args: {
        label: 'Button',
    },
}

export const Primary: Story = {
    args: {
        priority: 'primary',
        label: 'Button',
    },
}

export const Icon: Story = {
    args: {
        priority: 'tertiary',
        icon: faCoffee,
    },
}
