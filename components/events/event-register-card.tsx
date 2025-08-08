import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toFarsiNumber } from "@/lib/utils";

interface EventRegisterCardProps {
  price: number;
  capacity: number | null | undefined;
  onRegister: () => void;
}

export default function EventRegisterCard({ price, capacity, onRegister }: EventRegisterCardProps) {
  return (
    <Card className="sticky top-20 z-10">
      <CardHeader>
        <CardTitle>ثبت‌نام در رویداد</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between py-2">
          <span className="font-medium">قیمت:</span>
          <span>{price === 0 ? "رایگان" : `${toFarsiNumber(price)} تومان`}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-medium">ظرفیت :</span>
          <span>{toFarsiNumber(capacity)} نفر</span>
        </div>
        <Button size="lg" className="w-full" onClick={onRegister}>
          ثبت‌نام در رویداد
        </Button>
      </CardContent>
    </Card>
  );
}
