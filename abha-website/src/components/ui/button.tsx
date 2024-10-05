import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface CustomButtonProps {
    isLoading?: boolean;
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        CustomButtonProps,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            // <>
            //     {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            //     <Comp
            //         className={cn(buttonVariants({ variant, size, className }))}
            //         ref={ref}
            //         {...props}
            //     />
            // </>

            <button
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
                disabled={isLoading || props.disabled}
                ref={ref}
            >
                {isLoading && <Loader2 className="mr-2 animate-spin" size={16} strokeWidth={3.5} />}
                {props.children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
