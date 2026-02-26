import React from "react";
import { Check } from "lucide-react";
import { Card, Alert, Button } from "@/components/ui";
import type { LucideIcon } from "lucide-react";

type SectionCardProps = {
  label: string;
  filled: boolean;
  filledText: string;
  emptyText: string;
  buttonLabel: string;
  buttonIcon: LucideIcon;
  onPress: () => void;
  children?: React.ReactNode;
};

export function SectionCard({
  label,
  filled,
  filledText,
  emptyText,
  buttonLabel,
  buttonIcon,
  onPress,
  children,
}: SectionCardProps) {
  return (
    <Card variant="outlined" label={label}>
      <Alert
        variant={filled ? "success" : "default"}
        description={filled ? filledText : emptyText}
        icon={filled ? <Check size={18} color="#16a34a" /> : undefined}
        className="mb-3"
      />
      {children}
      <Button variant="tonal" icon={buttonIcon} className="w-full" onPress={onPress}>
        {buttonLabel}
      </Button>
    </Card>
  );
}
