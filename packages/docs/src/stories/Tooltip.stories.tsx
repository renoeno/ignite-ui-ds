import type { StoryObj, Meta } from "@storybook/react"
import { Tooltip, TooltipProps, Box } from "@renodev/react"

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        children: (
        <Box css={{ maxWidth: '50px', 
            color: '$white', 
            display: 'flex', 
            justifyContent: 'center',
            fontWeight: '$medium',
            fontFamily: '$default'
            }}>
            21
        </Box>),
        content: '21 de Outubro - Indisponível'
            
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
