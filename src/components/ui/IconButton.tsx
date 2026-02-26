import * as React from "react";
import {
  View,
  Pressable,
  ActivityIndicator,
  type PressableProps,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";
import { Badge } from "./Badge";

const iconButtonVariants = cva(
  "items-center justify-center rounded-component",
  {
    variants: {
      variant: {
        default: "bg-primary",
        filled: "bg-primary",
        tonal: "bg-secondary-container",
        outlined: "border-component border-outline bg-transparent",
        standard: "bg-transparent",
      },
      size: {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

const iconSizeMap: Record<string, number> = {
  sm: 16,
  default: 20,
  lg: 24,
};

interface IconButtonProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  loading?: boolean;
  iconColor?: string;
  iconSize?: number;
  badge?: number;
}

const IconButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  IconButtonProps
>(
  (
    {
      className,
      variant = "default",
      size = "lg",
      icon: Icon,
      loading = false,
      disabled,
      iconColor,
      iconSize,
      badge,
      ...props
    },
    ref
  ) => {
    const colors = useThemeColors();
    const defaultIconColor = (() => {
      const v = variant ?? "default";
      if (v === "default" || v === "filled") return "#FFFFFF";
      if (v === "tonal") return colors.onSecondaryContainer;
      return colors.onSurfaceVariant;
    })();
    const defaultIconSize = iconSizeMap[size ?? "default"];

    const content = (
      <Pressable
        ref={ref}
        className={cn(
          iconButtonVariants({ variant, size }),
          disabled && "opacity-[0.38]",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={iconColor ?? defaultIconColor}
          />
        ) : (
          <Icon
            size={iconSize ?? defaultIconSize}
            color={iconColor ?? defaultIconColor}
          />
        )}
      </Pressable>
    );

    if (badge !== undefined && badge > 0) {
      return (
        <View className="relative">
          {content}
          <Badge
            size="sm"
            count={badge}
            className="absolute -top-1 -right-1"
          />
        </View>
      );
    }

    return content;
  }
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
