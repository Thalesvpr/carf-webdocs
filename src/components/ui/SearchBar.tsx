import * as React from "react";
import { TextInput, View, Pressable, type TextInputProps } from "react-native";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";

export interface SearchBarProps
  extends Omit<TextInputProps, "value" | "onChangeText"> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  onSubmit?: () => void;
  className?: string;
}

const SearchBar = React.forwardRef<TextInput, SearchBarProps>(
  (
    {
      value,
      onChangeText,
      placeholder = "Search...",
      onClear,
      onSubmit,
      className,
      ...props
    },
    ref
  ) => {
    const colors = useThemeColors();

    const handleClear = () => {
      onChangeText("");
      onClear?.();
    };

    return (
      <View
        className={cn(
          "h-12 w-full flex-row items-center rounded-component bg-surface-container-highest px-3",
          className
        )}
      >
        <Search size={20} color={colors.onSurfaceVariant} />
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.onSurfaceVariant}
          returnKeyType="search"
          onSubmitEditing={onSubmit}
          className="font-sans flex-1 text-body-lg text-on-surface mx-3"
          style={props.style}
          {...props}
        />
        {value.length > 0 && (
          <Pressable onPress={handleClear}>
            <X size={20} color={colors.onSurfaceVariant} />
          </Pressable>
        )}
      </View>
    );
  }
);

SearchBar.displayName = "SearchBar";

export { SearchBar };
