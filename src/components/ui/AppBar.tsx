import * as React from "react";
import { View, Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";
import { IconButton } from "./IconButton";
import type { LucideIcon } from "lucide-react";

const appBarVariants = cva("w-full bg-surface", {
  variants: {
    variant: {
      "center-aligned": "",
      small: "",
      medium: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "center-aligned",
  },
});

const APPBAR_HEIGHT: Record<string, number> = {
  "center-aligned": 64,
  small: 64,
  medium: 112,
  large: 152,
};

export interface AppBarProps extends VariantProps<typeof appBarVariants> {
  title: string;
  leadingIcon?: LucideIcon;
  onLeadingPress?: () => void;
  trailingIcon?: LucideIcon;
  onTrailingPress?: () => void;
  trailingContent?: React.ReactNode;
  flush?: boolean;
  className?: string;
}

export function AppBar({
  variant = "center-aligned",
  title,
  leadingIcon: LeadingIcon,
  onLeadingPress,
  trailingIcon: TrailingIcon,
  onTrailingPress,
  trailingContent,
  flush,
  className,
}: AppBarProps) {
  const colors = useThemeColors();
  const isCompact = variant === "center-aligned" || variant === "small";
  const baseHeight = APPBAR_HEIGHT[variant ?? "center-aligned"];

  return (
    <View
      className={cn(appBarVariants({ variant }), className)}
      style={{ height: baseHeight, marginBottom: flush ? 0 : 12 }}
    >
      <View className="h-16 flex-row items-center gap-4 px-4">
        {LeadingIcon ? (
          <IconButton
            variant="tonal"
            icon={LeadingIcon}
            onPress={onLeadingPress}
          />
        ) : (
          <View className="w-4" />
        )}

        {isCompact && (
          <Text
            className={cn(
              "flex-1 font-sans text-title-lg",
              variant === "center-aligned" && "text-center"
            )}
            style={{ color: colors.onSurface }}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}

        {!isCompact && <View className="flex-1" />}

        {trailingContent ? (
          trailingContent
        ) : TrailingIcon ? (
          <IconButton
            variant="tonal"
            icon={TrailingIcon}
            onPress={onTrailingPress}
          />
        ) : (
          <View className="w-4" />
        )}
      </View>

      {!isCompact && (
        <View className="flex-1 justify-end px-4 pb-4">
          <Text
            className={cn(
              "font-sans",
              variant === "medium" ? "text-title-lg" : "text-headline-md"
            )}
            style={{ color: colors.onSurface }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      )}
    </View>
  );
}
