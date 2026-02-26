import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./Dialog";
import { Input } from "./Input";
import { Button } from "./Button";

interface HardDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entityName: string;
  onConfirm: () => void;
  loading?: boolean;
}

const CONFIRM_WORD = "deletar";

function HardDeleteDialog({
  open,
  onOpenChange,
  entityName,
  onConfirm,
  loading = false,
}: HardDeleteDialogProps) {
  const [typedText, setTypedText] = React.useState("");

  const isMatch = typedText.trim().toLowerCase() === CONFIRM_WORD;

  React.useEffect(() => {
    if (!open) setTypedText("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Exclusao permanente</DialogTitle>
          <DialogDescription>
            {`Voce esta prestes a excluir "${entityName}". Esta acao e irreversivel. Para confirmar, digite deletar abaixo.`}
          </DialogDescription>
        </DialogHeader>

        <Input
          label='Digite "deletar" para confirmar'
          placeholder={CONFIRM_WORD}
          value={typedText}
          onChangeText={setTypedText}
          autoCapitalize="none"
          containerClassName="mt-2"
        />

        <DialogFooter>
          <Button
            variant="text"
            onPress={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onPress={onConfirm}
            disabled={!isMatch || loading}
            loading={loading}
          >
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { HardDeleteDialog };
export type { HardDeleteDialogProps };
