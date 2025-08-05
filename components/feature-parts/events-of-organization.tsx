import moment from "jalali-moment";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Event } from "@/models/event";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EventProps {
  events: Event[] | undefined;
}

export default function eventsOfOrganization({ events }: EventProps) {
  return (
    <div dir="rtl">
      <h3 className="mb-4 text-lg font-bold"> رویداد های سازمان</h3>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events?.map(event => (
          <Card className="overflow-hidden" key={event.public_id}>
            <div className="relative h-40">
              <Image
                fill
                alt={event.title}
                className="object-cover"
                src={event.image || "/placeholder.svg"}
              />
            </div>
            <CardContent className="p-4">
              <h4 className="mb-2 line-clamp-1 font-bold">{event.title}</h4>
              <div className="text-muted-foreground mb-1 flex items-center gap-2 text-sm">
                <Calendar className="h-3 w-3" />
                <span>{moment(event.start_date).locale("fa").format("YYYY/MM/DD")}</span>
              </div>
              <div className="text-muted-foreground mb-1 flex items-center gap-2 text-sm">
                <Clock className="h-3 w-3" />
                <span>{moment(event.start_date).locale("fa").format("HH:MM")}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <MapPin className="h-3 w-3" />
                <span>{event.location}</span>
              </div>
              <Button asChild size="sm" className="mt-3 w-full" variant="outline">
                <Link href={`/events/${event.public_id}`}>مشاهده جزئیات</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
