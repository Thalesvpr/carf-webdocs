import * as React from "react";
import { TextInput, View, Text, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  supportingText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      className,
      label,
      error,
      supportingText,
      leadingIcon,
      trailingIcon,
      containerClassName,
      onFocus,
      onBlur,
      style,
      editable,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);
    const colors = useThemeColors();
    const isEmpty = !rest.value || rest.value.length === 0;

    const helperText = error || supportingText;

    return (
      <View className={cn("w-full", containerClassName)}>
        {label && (
          <Text
            className={cn(
              "font-medium text-body-sm mb-1 pl-3",
              focused ? "text-primary" : "text-on-surface-variant"
            )}
          >
            {label}
          </Text>
        )}
        <View
          className={cn(
            "h-14 w-full flex-row items-center rounded-component bg-surface-container px-3",
            error
              ? "border-2 border-destructive"
              : focused
                ? "border-2 border-primary"
                : isEmpty
                  ? "border-component border-outline-variant"
                  : "border-component border-outline"
          )}
        >
          {leadingIcon && <View className="mr-3">{leadingIcon}</View>}
          <TextInput
            ref={ref}
            {...rest}
            className={cn(
              "font-sans flex-1 text-body-lg text-on-surface",
              className
            )}
            placeholderTextColor={colors.onSurfaceVariant}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            style={style}
            editable={editable}
          />
          {trailingIcon && <View className="ml-3">{trailingIcon}</View>}
        </View>
        {helperText && (
          <Text
            className={cn(
              "font-sans text-body-sm mt-1",
              error ? "text-destructive" : "text-on-surface-variant"
            )}
          >
            {helperText}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";

export { Input };
