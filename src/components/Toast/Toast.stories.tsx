// system imports
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// component imports
import { IToastProps, Toast } from '.'

const meta = {
    title: 'Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

const DefaultTemplate = (args: IToastProps) => {
    return <Toast {...args}>I am a toast</Toast>
}
export const Default: Story = {
    args: {
        onClose: () => {},
    },
    render: DefaultTemplate,
}
