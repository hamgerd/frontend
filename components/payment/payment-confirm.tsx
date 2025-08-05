import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PaymentConfirmProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  ticketPrice: number | string;
  ticketName: string;
}

export default function PaymentConfirm({
  open,
  onCancel,
  onConfirm,
  ticketPrice,
  ticketName,
}: PaymentConfirmProps) {
  const displayPrice = ticketPrice === "0" ? "رایگان" : ticketPrice;

  return (
    <div className="z-100">
      <Dialog onOpenChange={onCancel} open={open}>
        <DialogContent className="text-right">
          <DialogHeader className="text-right">
            <DialogTitle className="mt-4 text-right font-bold">تایید پرداخت</DialogTitle>
            <DialogDescription className="text-muted-foreground py-4 text-right">
              خرید بلیط {ticketName} به قیمت {displayPrice}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex-row-reverse gap-2 sm:justify-end">
            <Button onClick={onConfirm}>{displayPrice === "رایگان" ? "تایید" : "پرداخت"}</Button>
            <Button variant="outline" onClick={onCancel}>
              لغو
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
