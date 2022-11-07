import type { StoryObj, Meta } from "@storybook/react"
import { Toast, ToastProps, Box } from "@renodev/react"

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        title: 'Agendamento realizado',
        children: 'Quarta-feira, 23 de Outubro às 16h'
            
    },
    argTypes: {
        onClick: {
            action: 'clicked'
        },
        open: {
            options: [true, false],
            type: "boolean"
        }
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
