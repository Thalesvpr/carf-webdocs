import * as React from "react";
import { View, Text, Pressable } from "react-native";
import {
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  X,
} from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";

const alertVariants = cva("w-full rounded-component p-4 flex-row", {
  variants: {
    variant: {
      default: "bg-surface-variant",
      destructive: "bg-destructive/[0.12]",
      warning: "bg-warning/[0.12]",
      success: "bg-success/[0.12]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const alertIcons = {
  default: Info,
  destructive: AlertCircle,
  warning: AlertTriangle,
  success: CheckCircle2,
};

export interface AlertProps extends VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Alert = React.forwardRef<View, AlertProps>(
  (
    {
      variant = "default",
      title,
      description,
      icon,
      closable = false,
      onClose,
      className,
      children,
    },
    ref
  ) => {
    const colors = useThemeColors();

    const alertIconColors: Record<string, string> = {
      default: colors.onSurfaceVariant,
      destructive: "hsl(0, 84.2%, 60.2%)",
      warning: "hsl(38, 92%, 50%)",
      success: "hsl(142, 76%, 36%)",
    };

    const IconComponent = alertIcons[variant || "default"];
    const iconColor = alertIconColors[variant || "default"];

    return (
      <View ref={ref} className={cn(alertVariants({ variant }), className)}>
        <View className="mr-3 mt-0.5">
          {icon || <IconComponent size={20} color={iconColor} />}
        </View>
        <View className="flex-1">
          {title && (
            <Text
              className="font-medium text-title-sm text-on-surface mb-1"
            >
              {title}
            </Text>
          )}
          {description && (
            <Text
              className="font-sans text-body-md text-on-surface-variant"
            >
              {description}
            </Text>
          )}
          {children}
        </View>
        {closable && (
          <Pressable
            onPress={onClose}
            className="ml-2 -mt-1 -mr-1 p-1"
          >
            <X size={18} color={colors.onSurfaceVariant} />
          </Pressable>
        )}
      </View>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
