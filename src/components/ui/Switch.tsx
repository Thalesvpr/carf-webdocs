import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { cn } from "@/lib/utils";

export interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Switch = React.forwardRef<View, SwitchProps>(
  (
    { checked = false, onCheckedChange, disabled = false, label, className },
    ref
  ) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        className={cn(
          "flex-row items-center",
          disabled && "opacity-[0.38]",
          className
        )}
        accessibilityRole="switch"
      >
        <View
          className={cn(
            "h-8 w-[52px] rounded-full justify-center transition-colors duration-200",
            checked
              ? "bg-primary"
              : "bg-surface-container-highest border-2 border-outline"
          )}
        >
          <View
            className={cn(
              "rounded-full transition-all duration-200",
              checked ? "bg-primary-foreground" : "bg-outline"
            )}
            style={{
              width: checked ? 24 : 16,
              height: checked ? 24 : 16,
              transform: [{ translateX: checked ? 24 : 4 }],
            }}
          />
        </View>
        {label && (
          <Text className="font-sans text-body-lg text-on-surface ml-3">
            {label}
          </Text>
        )}
      </Pressable>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
