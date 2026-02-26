import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "@/lib/utils";

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const SegmentedControl = React.forwardRef<View, SegmentedControlProps>(
  ({ options, value, onValueChange, disabled = false, className }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          "flex-row gap-2 rounded-component bg-surface-container p-3",
          disabled && "opacity-[0.38]",
          className
        )}
      >
        {options.map((option) => {
          const isSelected = option.value === value;

          return (
            <Pressable
              key={option.value}
              disabled={disabled}
              onPress={() => {
                if (!disabled) {
                  onValueChange(option.value);
                }
              }}
              className={cn(
                "rounded-component px-4 py-2",
                isSelected ? "bg-surface" : "bg-transparent"
              )}
            >
              <Text
                className={cn(
                  "text-label-lg font-medium",
                  isSelected ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  }
);

SegmentedControl.displayName = "SegmentedControl";

export { SegmentedControl };
