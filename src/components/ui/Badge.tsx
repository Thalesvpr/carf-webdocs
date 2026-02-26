import * as React from "react";
import { View, Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex-row items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-destructive",
        secondary: "bg-secondary",
        outline: "border border-outline bg-transparent",
        destructive: "bg-destructive",
        warning: "bg-warning",
        success: "bg-success",
        primary: "bg-primary",
      },
      size: {
        sm: "px-1.5 h-4 min-w-[16px]",
        default: "px-2 h-5 min-w-[20px]",
        dot: "h-1.5 w-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const badgeTextSizeMap: Record<string, number> = {
  sm: 11,
  default: 11,
};

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  count?: number;
  max?: number;
  showZero?: boolean;
  className?: string;
}

const Badge = React.forwardRef<View, BadgeProps>(
  (
    {
      variant,
      size,
      children,
      count,
      max = 99,
      showZero = false,
      className,
    },
    ref
  ) => {
    if (size === "dot") {
      return (
        <View
          ref={ref}
          className={cn(badgeVariants({ variant, size }), className)}
        />
      );
    }

    const textColor = (() => {
      const v = variant ?? "default";
      if (v === "secondary") return "hsl(var(--on-surface-variant))";
      if (v === "outline") return "hsl(var(--on-surface))";
      return "#FFFFFF";
    })();
    const textSize = badgeTextSizeMap[size ?? "default"] ?? 11;

    if (count !== undefined) {
      if (count === 0 && !showZero) return null;
      const displayCount = count > max ? `${max}+` : count.toString();
      return (
        <View ref={ref} className={cn(badgeVariants({ variant, size }), className)}>
          <Text
            className="font-medium"
            style={{
              color: textColor,
              fontSize: textSize,
              lineHeight: textSize + 3,
            }}
          >
            {displayCount}
          </Text>
        </View>
      );
    }

    return (
      <View ref={ref} className={cn(badgeVariants({ variant, size }), className)}>
        {typeof children === "string" ? (
          <Text
            className="font-medium"
            style={{
              color: textColor,
              fontSize: textSize,
              lineHeight: textSize + 3,
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
