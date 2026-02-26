import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const Checkbox = React.forwardRef<View, CheckboxProps>(
  (
    {
      checked = false,
      indeterminate = false,
      onCheckedChange,
      disabled = false,
      label,
      className,
    },
    ref
  ) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const isActive = checked || indeterminate;

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
      >
        <View
          className={cn(
            "h-[18px] w-[18px] rounded-[2px] items-center justify-center",
            isActive
              ? "bg-primary"
              : "border-2 border-on-surface-variant"
          )}
        >
          <div
            style={{
              transform: `scale(${isActive ? 1 : 0})`,
              transition: "transform 150ms ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {indeterminate ? (
              <Minus size={14} color="#fff" strokeWidth={3} />
            ) : checked ? (
              <Check size={14} color="#fff" strokeWidth={3} />
            ) : null}
          </div>
        </View>
        {label && (
          <Text
            className="font-sans text-body-lg text-on-surface ml-3"
          >
            {label}
          </Text>
        )}
      </Pressable>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
