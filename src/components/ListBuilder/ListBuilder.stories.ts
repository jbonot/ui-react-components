import type { Meta, StoryObj } from '@storybook/react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { ListBuilder } from './ListBuilder'

const meta = {
    title: 'ListBuilder',
    component: ListBuilder,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ListBuilder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        value: [],
        headers: [
            {
                key: 'First Name',
            },
            {
                key: 'Last Name',
            },
        ],
    },
}
