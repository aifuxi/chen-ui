"use client"

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] border border-transparent bg-clip-padding text-sm font-medium shadow-sm outline-none select-none transition-[transform,background-color,border-color,box-shadow,color,filter] duration-[var(--duration-normal)] ease-[var(--ease-smooth)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(16,185,129,0.2)] hover:brightness-110 hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-foreground hover:brightness-110",
        outline:
          "border-border bg-transparent text-foreground hover:border-white/20 hover:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[rgba(255,255,255,0.12)]",
        ghost:
          "bg-transparent text-foreground shadow-none hover:bg-secondary",
        link: "border-transparent bg-transparent px-0 text-primary shadow-none hover:underline hover:underline-offset-4",
      },
      size: {
        default: "min-h-10 px-5 py-2.5",
        sm: "min-h-8 rounded-[var(--radius-sm)] px-3 py-1.5 text-xs",
        lg: "min-h-12 px-7 py-3.5 text-base",
        icon: "size-10 p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }

const Button = React.forwardRef<React.ComponentRef<typeof ButtonPrimitive>, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      nativeButton,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        nativeButton={nativeButton}
        type={nativeButton === false ? undefined : type ?? "button"}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, type ButtonProps, buttonVariants }
