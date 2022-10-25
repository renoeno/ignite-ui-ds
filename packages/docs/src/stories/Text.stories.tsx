import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from "@ignite-ui/react"

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Mollitia exercitationem dolore aliquam expedita corrupti, qui cumque dolores impedit voluptatem, incidunt nulla!'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}
