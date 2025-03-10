import { tv } from "tailwind-variants";

export const baseButtonVariants = tv({
  slots: {
    base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  },
  variants: {
    variant: {
      default:
        "bg-transparent text-default-foreground enabled:hover:bg-gray-100",
      primary: "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90",
      outline:
        "border border-input bg-background enabled:hover:bg-accent text-accent-foreground enabled:hover:text-accent-foreground/90",
      secondary:
        "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80",
      ghost:
        "bg-accent text-accent-foreground enabled:hover:bg-primary enabled:hover:text-primary-foreground",
      link: "bg-transparent text-default-foreground underline underline-offset-4 enabled:hover:no-underline pl-0 pr-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const buttonVariants = tv({
  extend: baseButtonVariants,
  variants: {
    size: {
      default: "h-8 px-4 py-2 text-base [&_svg]:size-4",
      xs: "h-6 px-2 text-sm [&_svg]:size-3",
      sm: "h-7 px-3 text-sm [&_svg]:size-4",
      md: "h-8 px-4 py-2 text-base [&_svg]:size-4",
      lg: "h-9 px-5 text-lg [&_svg]:size-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const actionButtonVariants = tv({
  extend: baseButtonVariants,
  slots: {
    base: "",
    actionsButton: "rounded-l-none",
  },
  variants: {
    size: {
      default: {
        base: "h-8 px-3 text-base [&_svg]:size-5",
        actionsButton: "h-8 px-2 [&_svg]:size-5",
      },
      xs: {
        base: "h-6 px-2 text-sm [&_svg]:size-3",
        actionsButton: "h-6 px-1.5 [&_svg]:size-3",
      },
      sm: {
        base: "h-7 px-3 text-sm [&_svg]:size-4",
        actionsButton: "h-7 px-2 [&_svg]:size-4",
      },
      md: {
        base: "h-8 px-3 text-base [&_svg]:size-5",
        actionsButton: "h-8 px-2 [&_svg]:size-5",
      },
      lg: {
        base: "h-9 px-4 text-lg [&_svg]:size-6",
        actionsButton: "h-9 px-2 [&_svg]:size-6",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const iconButtonVariants = tv({
  extend: baseButtonVariants,
  slots: {
    base: "px-0",
    icon: "",
  },
  variants: {
    size: {
      default: {
        base: "size-6",
        icon: "size-4",
      },
      xs: {
        base: "size-5",
        icon: "size-[14px]",
      },
      sm: {
        base: "size-6",
        icon: "size-4",
      },
      md: {
        base: "size-7",
        icon: "size-5",
      },
      lg: {
        base: "size-8",
        icon: "size-6",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});
