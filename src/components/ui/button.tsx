import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-feminine-primary text-feminine-text-light hover:bg-feminine-primary-dark",
        destructive:
          "bg-feminine-accent text-feminine-text-light hover:bg-feminine-accent-dark",
        outline:
          "border border-feminine-primary/30 bg-feminine-background-alt hover:bg-feminine-primary/10 hover:text-feminine-primary",
        secondary:
          "bg-feminine-secondary text-feminine-text-light hover:bg-feminine-secondary-dark",
        ghost: "hover:bg-feminine-primary/10 hover:text-feminine-primary",
        link: "text-feminine-primary underline-offset-4 hover:underline",
        feminine: "bg-feminine-primary text-feminine-text-light hover:bg-feminine-primary-dark shadow-[0_0_10px_rgba(155,77,202,0.3)] hover:shadow-[0_0_15px_rgba(155,77,202,0.5)]",
        soft: "bg-feminine-secondary text-feminine-text-light hover:bg-feminine-secondary-dark shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:shadow-[0_0_15px_rgba(255,105,180,0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        pill: "h-10 rounded-pill px-6",
        "sm-pill": "h-9 rounded-pill px-4",
        "lg-pill": "h-12 rounded-pill px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
