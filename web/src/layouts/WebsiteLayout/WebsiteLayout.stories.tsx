import type { Meta, StoryObj } from '@storybook/react'

import WebsiteLayout from './WebsiteLayout'

const meta: Meta<typeof WebsiteLayout> = {
  component: WebsiteLayout,
}

export default meta

type Story = StoryObj<typeof WebsiteLayout>

export const Primary: Story = {}
