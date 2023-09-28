// stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import { MainText } from '../style'
import { ComponentChildProp } from '../utils/ComponentChildProp'

export default {
  title: 'Pages/Home/Micros/MainText',
  component: MainText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn<ComponentChildProp> = (args) => <MainText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Cuidamos bem do seu pokémon, para ele cuidar bem de você',
}
