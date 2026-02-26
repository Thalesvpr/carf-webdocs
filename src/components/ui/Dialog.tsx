import * as React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "@/lib/utils";

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog");
  }
  return context;
}

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      onOpenChange?.(value);
    },
    [onOpenChange]
  );

  return (
    <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

function DialogTrigger({ children, asChild }: DialogTriggerProps) {
  const { onOpenChange } = useDialogContext();

  if (asChild) {
    return React.cloneElement(children, {
      onPress: () => onOpenChange(true),
    } as React.Attributes & { onPress: () => void });
  }

  return (
    <Pressable onPress={() => onOpenChange(true)}>
      {children}
    </Pressable>
  );
}

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

function DialogContent({ children, className }: DialogContentProps) {
  const { open, onOpenChange } = useDialogContext();

  if (!open) return null;

  return (
    <View
      style={{
        position: "fixed" as any,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Backdrop */}
      <Pressable
        onPress={() => onOpenChange(false)}
        style={{
          position: "absolute" as any,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.32)",
        }}
      />
      {/* Content */}
      <View
        className={cn(
          "bg-surface rounded-component p-6 max-w-lg w-full mx-6",
          className
        )}
        style={{ zIndex: 51, maxWidth: 480 }}
      >
        {children}
      </View>
    </View>
  );
}

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

function DialogHeader({ children, className }: DialogHeaderProps) {
  return <View className={cn("mb-4", className)}>{children}</View>;
}

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

function DialogTitle({ children, className }: DialogTitleProps) {
  return (
    <Text
      className={cn("font-sans text-headline-sm text-on-surface", className)}
    >
      {children}
    </Text>
  );
}

interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

function DialogDescription({ children, className }: DialogDescriptionProps) {
  return (
    <Text
      className={cn("font-sans text-body-md text-on-surface-variant mt-2", className)}
    >
      {children}
    </Text>
  );
}

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

function DialogFooter({ children, className }: DialogFooterProps) {
  return (
    <View className={cn("flex-row justify-end gap-2 mt-6", className)}>
      {children}
    </View>
  );
}

interface DialogCloseProps {
  children: React.ReactElement;
  asChild?: boolean;
}

function DialogClose({ children, asChild }: DialogCloseProps) {
  const { onOpenChange } = useDialogContext();

  if (asChild) {
    return React.cloneElement(children, {
      onPress: () => onOpenChange(false),
    } as React.Attributes & { onPress: () => void });
  }

  return (
    <Pressable onPress={() => onOpenChange(false)}>
      {children}
    </Pressable>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
};
