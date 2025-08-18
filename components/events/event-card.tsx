"use client";
import moment from "jalali-moment";
import { CalendarDays, MapPin, Trash2Icon, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Event } from "@/models/event";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";

interface EventCardProps {
  event: Event;
  TrashOption?: boolean;
}

export default function EventCard({ event, TrashOption }: EventCardProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const handleDeleteOrganization = async () => {
    try {
      await api.delete(`api/v1/events/${event.public_id}/`);
      toast({
        title: "ایونت با موفقیت حذف شد",
        variant: "default",
      });
      setOpen(false);
    } catch (_error) {
      toast({
        title: "مشکلی در حذف ایونت وجود دارد",
        description: "لطفا بعدا جهت حذف ایونت دوباره تلاش کنید",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Card className="overflow-hidden" key={event.public_id}>
        <div className="relative h-48">
          <Image
            fill
            alt={event.title}
            className="object-cover"
            src={event.image ?? "/placeholder.svg"}
          />
        </div>

        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
          <div className="text-muted-foreground mb-2 flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{moment(event.start_date).locale("fa").format(" شروع YYYY/MM/DD")}</span>
          </div>
          <div className="text-muted-foreground mb-2 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>ظرفیت {event.max_participants}</span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full">
            <Link href={`/events/${event.public_id}`}>مشاهده جزئیات</Link>
          </Button>
          {TrashOption ? (
            <Trash2Icon
              className="text-destructive z-10 mx-2 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          ) : (
            <div></div>
          )}
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-right">
          <DialogHeader className="text-right">
            <DialogTitle className="mt-4 text-right font-bold">تایید حذف</DialogTitle>
            <DialogDescription className="text-muted-foreground py-4 text-right">
              آیا از حذف ایونت {event.title} مطمئن هستید؟
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex-row-reverse gap-2 sm:justify-end">
            <Button onClick={handleDeleteOrganization}>تایید</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              لغو
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
