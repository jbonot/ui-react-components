// system imports
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// component imports
import { Toast } from './Toast'

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

export const Default: Story = {
    args: {},
}
