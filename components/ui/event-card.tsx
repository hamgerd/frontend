"use client";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Event } from "@/models/event";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card key={event.id} className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs">
          {event.category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2">{event.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <CalendarDays className="h-4 w-4" />
          {/*  // FIXME */}
          <span>{event.start_date}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{event.max_participants} شرکت‌کننده</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>مشاهده جزئیات</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
