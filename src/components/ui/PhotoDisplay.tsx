import * as React from "react";
import { View, Image } from "react-native";
import { Camera, X, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeColors } from "@/theme";
import { IconButton } from "./IconButton";
import { Button } from "./Button";

interface PhotoDisplayProps {
  uri?: string | null;
  onRemove?: () => void;
  onRetake?: () => void;
  onCapture?: () => void;
  captureLabel?: string;
  sizeClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

function PhotoDisplay({
  uri,
  onRemove,
  onRetake,
  onCapture,
  captureLabel,
  sizeClassName = "w-24 h-24",
  className,
  style,
}: PhotoDisplayProps) {
  const colors = useThemeColors();

  if (!uri) {
    return (
      <View
        className={cn(
          "rounded-component items-center justify-center",
          sizeClassName,
          className
        )}
        style={{ backgroundColor: colors.secondaryContainer, ...style }}
      >
        {captureLabel ? (
          <Button
            variant="filled"
            icon={Camera}
            onPress={onCapture}
            disabled={!onCapture}
          >
            {captureLabel}
          </Button>
        ) : (
          <IconButton
            variant="filled"
            size="lg"
            icon={Camera}
            onPress={onCapture}
            disabled={!onCapture}
          />
        )}
      </View>
    );
  }

  return (
    <View className={cn("relative", sizeClassName, className)} style={style}>
      <Image
        source={{ uri }}
        className="w-full h-full rounded-component"
        resizeMode="cover"
      />
      {(onRemove || onRetake) && (
        <View className="absolute -top-1 -right-1 flex-row gap-1">
          {onRetake && (
            <IconButton
              variant="tonal"
              size="sm"
              icon={RefreshCw}
              onPress={onRetake}
            />
          )}
          {onRemove && (
            <IconButton
              variant="filled"
              size="sm"
              icon={X}
              iconColor="#fff"
              onPress={onRemove}
              className="bg-destructive"
            />
          )}
        </View>
      )}
    </View>
  );
}

PhotoDisplay.displayName = "PhotoDisplay";

export { PhotoDisplay };
export type { PhotoDisplayProps };
