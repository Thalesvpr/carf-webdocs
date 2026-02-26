import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "@/lib/utils";

export type ToastVariant = "default" | "destructive" | "warning" | "success";

export interface ToastProps {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
  onDismiss?: (id: string) => void;
}

export function Toast({
  id,
  message,
  variant = "default",
  duration = 3000,
  action,
  onDismiss,
}: ToastProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => handleDismiss(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => onDismiss?.(id), 200);
  };

  return (
    <View
      className="bg-inverse-surface rounded-component px-4 py-3 flex-row items-center"
      style={{
        maxWidth: 480,
        width: "calc(100% - 32px)" as any,
        transition: "all 0.2s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      } as any}
    >
      <Text className="font-sans flex-1 text-body-md text-inverse-on-surface">
        {message}
      </Text>
      {action && (
        <Pressable
          onPress={() => {
            action.onPress();
            handleDismiss();
          }}
          className="ml-3 px-2 py-1"
        >
          <Text className="font-medium text-label-lg text-inverse-primary">
            {action.label}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export { Toast as default };
