import { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const buttonStyles = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-xl border transition-colors',
    'text-[14px] font-semibold leading-[14px] whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-surface-secondary border-stroke-primary text-white',
        secondary: 'border-stroke-primary bg-transparent text-content-primary',
      },
      size: {
        large:
          'min-h-[48px] px-6 py-2 md:min-h-[72px] md:px-9 md:py-6 md:text-[19px] md:leading-[19px]',
        default: 'min-h-[48px] px-6 py-2',
        medium: 'min-h-[40px] px-4 py-2',
        small: 'min-h-[32px] px-4 py-1',
      },
      fluid: {
        true: 'w-full',
      },
      disabled: {
        true: 'disabled:cursor-not-allowed disabled:opacity-70',
      },
    },
    compoundVariants: [
      { variant: 'primary', disabled: true, class: 'text-white/60' },
      {
        variant: 'secondary',
        disabled: true,
        class: 'text-content-primary/50',
      },
      {
        variant: 'primary',
        disabled: false,
        class: 'hover:bg-dark-600 hover:border-dark-600',
      },
      {
        variant: 'secondary',
        disabled: false,
        class:
          'hover:bg-surface-secondary hover:border-stroke-primary hover:text-white',
      },
    ],
    defaultVariants: {
      size: 'default',
      variant: 'primary',
      disabled: false,
    },
  }
)

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  type?: 'button' | 'submit'
}

export default function Button({
  type,
  className,
  size,
  variant,
  fluid,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={!!disabled}
      className={buttonStyles({
        variant,
        size,
        fluid,
        disabled,
        class: className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
