import { tv } from 'tailwind-variants';

export const baseButtonVariants = tv({
  slots: {
    base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  },
  variants: {
    color: {
      default: '',
      primary: '',
      destructive: '',
      info: '',
      success: '',
      warning: '',
    },
    variant: {
      filled: '',
      outlined: {
        base: 'border border-solid',
      },
      dashed: {
        base: 'border border-dashed',
      },
      subtle: '',
      text: '',
      link: {
        base: 'underline-offset-4 px-0',
      },
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'filled',
      className: {
        base: 'bg-transparent text-default-foreground enabled:hover:bg-gray-200',
      },
    },
    {
      color: 'default',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border enabled:hover:border-primary/90 enabled:hover:text-primary/90',
      },
    },
    {
      color: 'default',
      variant: 'subtle',
      className: {
        base: 'bg-black/5 enabled:hover:bg-black/10',
      },
    },
    {
      color: 'default',
      variant: 'text',
      className: {
        base: 'bg-transparent enabled:hover:bg-black/10',
      },
    },
    {
      color: 'default',
      variant: 'link',
      className: {
        base: 'bg-transparent underline enabled:hover:no-underline enabled:hover:text-primary/90',
      },
    },
    {
      color: 'primary',
      variant: 'filled',
      className: {
        base: 'bg-primary text-primary-foreground enabled:hover:bg-primary/90',
      },
    },
    {
      color: 'primary',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border-primary text-primary enabled:hover:border-primary/90 enabled:hover:text-primary/90',
      },
    },
    {
      color: 'primary',
      variant: 'subtle',
      className: {
        base: 'bg-primary/10 text-primary enabled:hover:bg-primary/20',
      },
    },
    {
      color: 'primary',
      variant: 'text',
      className: {
        base: 'bg-transparent text-primary enabled:hover:bg-primary/20',
      },
    },
    {
      color: 'primary',
      variant: 'link',
      className: {
        base: 'bg-transparent text-primary underline enabled:hover:no-underline enabled:hover:text-primary/90',
      },
    },
    {
      color: 'destructive',
      variant: 'filled',
      className: {
        base: 'bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90',
      },
    },
    {
      color: 'destructive',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border-destructive text-destructive enabled:hover:border-destructive/90 enabled:hover:text-destructive/90',
      },
    },
    {
      color: 'destructive',
      variant: 'subtle',
      className: {
        base: 'bg-destructive/10 text-destructive enabled:hover:bg-destructive/20',
      },
    },
    {
      color: 'destructive',
      variant: 'text',
      className: {
        base: 'bg-transparent text-destructive enabled:hover:bg-destructive/20',
      },
    },
    {
      color: 'destructive',
      variant: 'link',
      className: {
        base: 'bg-transparent text-destructive underline enabled:hover:no-underline enabled:hover:text-destructive/90',
      },
    },
    {
      color: 'info',
      variant: 'filled',
      className: {
        base: 'bg-info text-white enabled:hover:bg-info/90',
      },
    },
    {
      color: 'info',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border-info text-info enabled:hover:border-info/90 enabled:hover:text-info/90',
      },
    },
    {
      color: 'info',
      variant: 'subtle',
      className: {
        base: 'bg-info/10 text-info enabled:hover:bg-info/20',
      },
    },
    {
      color: 'info',
      variant: 'text',
      className: {
        base: 'bg-transparent text-info enabled:hover:bg-info/20',
      },
    },
    {
      color: 'info',
      variant: 'link',
      className: {
        base: 'bg-transparent text-info underline enabled:hover:no-underline enabled:hover:text-info/90',
      },
    },
    {
      color: 'success',
      variant: 'filled',
      className: {
        base: 'bg-success text-white enabled:hover:bg-success/90',
      },
    },
    {
      color: 'success',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border-success text-success enabled:hover:border-success/90 enabled:hover:text-success/90',
      },
    },
    {
      color: 'success',
      variant: 'subtle',
      className: {
        base: 'bg-success/10 text-success enabled:hover:bg-success/20',
      },
    },
    {
      color: 'success',
      variant: 'text',
      className: {
        base: 'bg-transparent text-success enabled:hover:bg-success/20',
      },
    },
    {
      color: 'success',
      variant: 'link',
      className: {
        base: 'bg-transparent text-success underline enabled:hover:no-underline enabled:hover:text-success/90',
      },
    },
    {
      color: 'warning',
      variant: 'filled',
      className: {
        base: 'bg-warning text-white enabled:hover:bg-warning/90',
      },
    },
    {
      color: 'warning',
      variant: ['outlined', 'dashed'],
      className: {
        base: 'border-warning text-warning enabled:hover:border-warning/90 enabled:hover:text-warning/90',
      },
    },
    {
      color: 'warning',
      variant: 'subtle',
      className: {
        base: 'bg-warning/10 text-warning enabled:hover:bg-warning/20',
      },
    },
    {
      color: 'warning',
      variant: 'text',
      className: {
        base: 'bg-transparent text-warning enabled:hover:bg-warning/20',
      },
    },
    {
      color: 'warning',
      variant: 'link',
      className: {
        base: 'bg-transparent text-warning underline enabled:hover:no-underline enabled:hover:text-warning/90',
      },
    },
  ],
});

export const buttonVariants = tv({
  extend: baseButtonVariants,
  slots: {
    base: '',
  },
  variants: {
    size: {
      default: 'h-8 px-4 py-2 text-base [&_svg]:size-4',
      xs: 'h-6 px-2 text-sm [&_svg]:size-3',
      sm: 'h-7 px-3 text-sm [&_svg]:size-4',
      md: 'h-8 px-4 py-2 text-base [&_svg]:size-4',
      lg: 'h-9 px-5 text-lg [&_svg]:size-5',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
    variant: 'filled',
  },
});

export const actionButtonVariants = tv({
  extend: baseButtonVariants,
  slots: {
    base: '',
    actionsButton: 'rounded-l-none',
  },
  variants: {
    size: {
      default: {
        base: 'h-8 px-3 text-base [&_svg]:size-5',
        actionsButton: 'h-8 px-2 [&_svg]:size-5',
      },
      xs: {
        base: 'h-6 px-2 text-sm [&_svg]:size-3',
        actionsButton: 'h-6 px-1.5 [&_svg]:size-3',
      },
      sm: {
        base: 'h-7 px-3 text-sm [&_svg]:size-4',
        actionsButton: 'h-7 px-2 [&_svg]:size-4',
      },
      md: {
        base: 'h-8 px-3 text-base [&_svg]:size-5',
        actionsButton: 'h-8 px-2 [&_svg]:size-5',
      },
      lg: {
        base: 'h-9 px-4 text-lg [&_svg]:size-6',
        actionsButton: 'h-9 px-2 [&_svg]:size-6',
      },
    },
    variant: {
      filled: {
        base: '',
      },
      outlined: {
        base: 'enabled:hover:z-[2]',
        actionsButton: 'ml-[-1px] enabled:hover:z-[2]',
      },
      dashed: {
        base: 'enabled:hover:z-[2]',
        actionsButton: 'ml-[-1px] enabled:hover:z-[2]',
      },
      subtle: {
        base: '',
      },
      text: {
        base: '',
      },
      link: {
        base: '',
      },
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
    variant: 'filled',
  },
});

export const iconButtonVariants = tv({
  extend: baseButtonVariants,
  slots: {
    base: 'px-0',
    icon: '',
  },
  variants: {
    size: {
      default: {
        base: 'size-6',
        icon: 'size-4',
      },
      xs: {
        base: 'size-5',
        icon: 'size-[14px]',
      },
      sm: {
        base: 'size-6',
        icon: 'size-4',
      },
      md: {
        base: 'size-7',
        icon: 'size-5',
      },
      lg: {
        base: 'size-8',
        icon: 'size-6',
      },
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
    variant: 'filled',
  },
});
