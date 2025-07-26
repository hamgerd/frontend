import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PaymentConfirmProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  ticketPrice: string;
  ticketName: string;
};

export default function PaymentConfirm({
  open,
  onCancel,
  onConfirm,
  ticketPrice,
  ticketName,
}: PaymentConfirmProps) {
  return (
    <div className="z-100">
      <Dialog open={open} onOpenChange={onCancel}>
        <DialogContent className="sm:max-w-md text-right">
          <DialogHeader className="text-right">
            <DialogTitle className="text-right font-bold mt-4">تایید پرداخت</DialogTitle>
            <DialogDescription className="text-right text-muted-foreground py-4">
              خرید بلیط {ticketName} به قیمت {ticketPrice}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-end flex-row-reverse gap-2">
            <Button onClick={onConfirm}>پرداخت</Button>
            <Button variant="outline" onClick={onCancel}>
              لغو
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
