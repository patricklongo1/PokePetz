// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import Header from './index'
import { ReactNode } from 'react'
import AnimatedLogo from '../AnimatedLogo/index'
import MainNav from '../MainNav/index'

export default {
  title: 'Components/Layout Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

interface HeaderProps {
  children: ReactNode
}

const children = (
  <>
    <AnimatedLogo />
    <MainNav />
  </>
)

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  children,
}
