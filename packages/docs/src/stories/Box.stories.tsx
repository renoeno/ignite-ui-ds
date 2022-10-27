import type { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps, Text } from "@renodev/react"

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam incidunt veritatis rem facilis nostrum eveniet neque numquam? 
                    Mollitia exercitationem dolore aliquam expedita corrupti, qui cumque dolores impedit voluptatem, incidunt nulla!
                </Text>
            </>
        )
    },
    argTypes: {
        children: {
            control: {
                type: 'null',
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}
