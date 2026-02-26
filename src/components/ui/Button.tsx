import * as React from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  type PressableProps,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";

const buttonVariants = cva(
  "flex-row items-center justify-center gap-2 rounded-component",
  {
    variants: {
      variant: {
        default: "bg-primary",
        filled: "bg-primary",
        tonal: "bg-secondary-container",
        elevated: "bg-surface",
        outline: "border-component border-outline bg-transparent",
        ghost: "bg-transparent",
        text: "bg-transparent",
        destructive: "bg-destructive",
        link: "",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-16 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-label-lg text-center", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      filled: "text-primary-foreground",
      tonal: "text-on-secondary-container",
      elevated: "text-primary",
      outline: "text-primary",
      ghost: "text-primary",
      text: "text-primary",
      destructive: "text-destructive-foreground",
      link: "text-primary underline",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  children?: React.ReactNode;
}

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      disabled,
      loading = false,
      icon: Icon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const colors = useThemeColors();
    const resolvedColor = (() => {
      if (isDisabled) return colors.onSurfaceVariant;
      const v = variant ?? "default";
      if (v === "default" || v === "filled") return colors.primaryForeground;
      if (v === "destructive") return "#FFFFFF";
      if (v === "tonal") return colors.onSecondaryContainer;
      return colors.primary;
    })();

    return (
      <Pressable
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          isDisabled && "bg-surface-container-highest",
          className
        )}
        disabled={isDisabled}
        style={
          variant === "elevated"
            ? { boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }
            : undefined
        }
        {...props}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={resolvedColor}
          />
        ) : typeof children === "string" ? (
          <View className="flex-row items-center gap-2">
            {Icon && <Icon size={18} color={resolvedColor} />}
            <Text
              className="font-sans text-label-lg text-center"
              style={{ color: resolvedColor }}
            >
              {children}
            </Text>
          </View>
        ) : (
          <>
            {Icon && <Icon size={18} color={resolvedColor} />}
            {children}
          </>
        )}
      </Pressable>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, buttonTextVariants };
