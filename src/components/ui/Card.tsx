import * as React from "react";
import { View, Text } from "react-native";
import { cn } from "@/lib/utils";
import { elevation } from "@/lib/elevation";
import { useThemeColors } from "@/theme";

export interface CardProps {
  label?: string;
  children: React.ReactNode;
  variant?: "elevated" | "filled" | "outlined";
  className?: string;
}

const variantClasses: Record<string, string> = {
  elevated: "bg-surface-container-low",
  filled: "bg-surface-container-highest",
  outlined: "bg-surface-container border-component border-outline-variant",
};

function Card({ label, children, variant = "elevated", className }: CardProps) {
  const colors = useThemeColors();

  if (!label) {
    return (
      <View
        className={cn("rounded-component p-4", variantClasses[variant], className)}
        style={variant === "elevated" ? elevation.level1 : undefined}
      >
        {children}
      </View>
    );
  }

  return (
    <View className={className}>
      <Text
        className="font-medium text-title-sm mb-2 pl-3"
        style={{ color: colors.onSurfaceVariant }}
      >
        {label}
      </Text>
      <View
        className={cn("rounded-component p-4", variantClasses[variant])}
        style={variant === "elevated" ? elevation.level1 : undefined}
      >
        {children}
      </View>
    </View>
  );
}

Card.displayName = "Card";

export { Card };
