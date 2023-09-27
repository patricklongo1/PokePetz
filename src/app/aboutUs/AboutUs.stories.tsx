// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import AboutUs from './page'

export default {
  title: 'Pages/AboutUs',
  component: AboutUs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = () => <AboutUs />

export const Default = Template.bind({})
