import type { StoryObj, Meta } from "@storybook/react"
import { Heading, HeadingProps } from "@renodev/react"

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        size: 'md',
        children: 'Custom Title'
    },
    argTypes: {
        size: {
            options: ['sm','md','lg','2xl','4xl','5xl','6xl'],
            control: {
                type: 'select'
            }
        },
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: "By default, heading is always a `h2`, but it can be changed with `as` property. "
            }
        }
    }
}
