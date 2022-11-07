import { ComponentProps } from "react";
import { X } from "phosphor-react"
import { 
    ToastAction, 
    ToastContainer, 
    ToastDescription, 
    ToastProvider, 
    ToastTitle, 
    ToastViewport 
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
    open: boolean;
    title: string;
    swipeDirection?: string;
    altText?: string;
}

export const Toast = ({ 
    open,
    title, 
    swipeDirection = "right", 
    altText = "Alternative text", 
    children,
    ...props 
}: ToastProps) => {

    return (
        <ToastProvider>
            <ToastContainer open={open} {...props}>
                <ToastTitle>
                    {title}
                </ToastTitle>
                <ToastDescription>
                  {children}
                </ToastDescription>
                <ToastAction asChild altText={altText}>
                   <X />
                </ToastAction>
            </ToastContainer>

            <ToastViewport />
        </ToastProvider>
    )
}