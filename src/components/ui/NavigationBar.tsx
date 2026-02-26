import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "@/lib/utils";
import { elevation } from "@/lib/elevation";
import { Badge } from "./Badge";
import type { LucideIcon } from "lucide-react";
import { useThemeColors } from "@/theme";

export interface NavigationItem {
  key: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavigationBarItemProps {
  item: NavigationItem;
  isActive: boolean;
  onPress: () => void;
}

function NavigationBarItem({
  item,
  isActive,
  onPress,
}: NavigationBarItemProps) {
  const colors = useThemeColors();
  const Icon = item.icon;

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center pt-3 pb-4"
    >
      <View className="relative items-center justify-center h-8 w-16">
        {isActive && (
          <View
            className="absolute bg-secondary-container rounded-component"
            style={{ width: 64, height: 32 }}
          />
        )}
        <Icon
          size={24}
          color={isActive ? colors.primary : colors.onSurfaceVariant}
          strokeWidth={isActive ? 2.5 : 1.5}
        />
        {item.badge !== undefined && item.badge > 0 && (
          <Badge
            size="sm"
            count={item.badge}
            className="absolute -top-0.5 -right-0.5"
          />
        )}
      </View>
      <Text
        className={cn(
          "text-label-md mt-2",
          isActive ? "font-medium" : "font-sans"
        )}
        style={{ color: isActive ? colors.primary : colors.onSurfaceVariant }}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}

export interface NavigationBarProps {
  items: NavigationItem[];
  activeKey: string;
  onItemPress: (key: string) => void;
}

export function NavigationBar({
  items,
  activeKey,
  onItemPress,
}: NavigationBarProps) {
  return (
    <View
      className="bg-surface-container"
      style={elevation.level2}
    >
      <View className="h-20 flex-row pt-2">
        {items.map((item) => (
          <NavigationBarItem
            key={item.key}
            item={item}
            isActive={item.key === activeKey}
            onPress={() => onItemPress(item.key)}
          />
        ))}
      </View>
    </View>
  );
}
