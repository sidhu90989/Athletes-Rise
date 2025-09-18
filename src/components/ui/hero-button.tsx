import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const heroButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-hero text-white shadow-elegant hover:shadow-lg hover:scale-105 transform transition-all duration-300",
        success: "bg-gradient-success text-white shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300",
        outline: "border-2 border-sai-saffron text-sai-saffron bg-transparent hover:bg-sai-saffron hover:text-white transition-all duration-300",
        ghost: "text-sai-navy hover:bg-sai-saffron/10 hover:text-sai-saffron transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
        xl: "h-14 rounded-lg px-10 text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean;
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";

export { HeroButton, heroButtonVariants };