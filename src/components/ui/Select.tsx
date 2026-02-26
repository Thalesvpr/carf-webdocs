import * as React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
}

function Select({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  label,
  error,
  disabled = false,
  className,
}: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const colors = useThemeColors();
  const containerRef = React.useRef<View>(null);

  const selectedOption = options.find((o) => o.value === value);

  const handleSelect = (optionValue: string) => {
    onValueChange?.(optionValue);
    setOpen(false);
  };

  const handleOpen = () => {
    if (!disabled) {
      setOpen((prev) => !prev);
    }
  };

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <View className={cn("w-full relative", className)}>
      {label && (
        <Text className="font-medium text-body-sm mb-1 pl-3 text-on-surface-variant">
          {label}
        </Text>
      )}

      {/* Trigger */}
      <Pressable
        onPress={(e) => {
          e.stopPropagation?.();
          handleOpen();
        }}
        className={cn(
          "h-14 w-full flex-row items-center rounded-component bg-surface-container px-3",
          error
            ? "border-2 border-destructive"
            : !value
              ? "border-component border-outline-variant"
              : "border-component border-outline",
          disabled && "opacity-[0.38]"
        )}
      >
        <Text
          className={cn(
            "font-sans flex-1 text-body-lg",
            selectedOption ? "text-on-surface" : "text-on-surface-variant"
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <ChevronDown size={20} color={colors.onSurfaceVariant} />
      </Pressable>

      {error && (
        <Text className="font-sans text-body-sm mt-1 text-destructive">
          {error}
        </Text>
      )}

      {/* Dropdown */}
      {open && (
        <View
          style={{
            position: "absolute" as any,
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 50,
            maxHeight: 240,
            marginTop: 4,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          } as any}
          className="bg-surface border border-outline-variant"
        >
          <ScrollView>
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <Pressable
                  key={option.value}
                  onPress={(e) => {
                    e.stopPropagation?.();
                    handleSelect(option.value);
                  }}
                  className={cn(
                    "flex-row items-center px-4 py-3",
                    isSelected ? "bg-secondary-container" : "bg-surface"
                  )}
                >
                  <Text
                    className={cn(
                      "flex-1 text-body-lg",
                      isSelected
                        ? "text-on-secondary-container font-medium"
                        : "text-on-surface font-sans"
                    )}
                  >
                    {option.label}
                  </Text>
                  {isSelected && (
                    <Check size={18} color={colors.onSecondaryContainer} />
                  )}
                </Pressable>
              );
            })}
            {options.length === 0 && (
              <View className="items-center py-6">
                <Text className="font-sans text-body-md text-on-surface-variant">
                  Nenhum resultado
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

Select.displayName = "Select";

export { Select };
