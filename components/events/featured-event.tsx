"use client";

import moment from "jalali-moment";
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Event } from "@/models/event";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import api from "@/lib/axios";

export default function FeaturedEvent() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      try {
        const res = await api.get("api/v1/events/featured/");
        if (res.data) {
          setFeaturedEvents(res.data);
        }
      } catch (error) {
        console.error("Error fetching featured events:", error);
      }
    };

    fetchFeaturedEvents();
  }, []);
  return (
    <section className="w-full py-12 md:py-24 flex items-center justify-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            رویدادهای برتر
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            جدیدترین و محبوب‌ترین رویدادهای در حال برگزاری
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredEvents.map(event => (
            <Card className="overflow-hidden w-full max-w-sm" key={event.public_id}>
              <div className="relative h-48">
                <Image
                  fill
                  alt={event.title}
                  className="object-cover"
                  src={event.image ?? "/placeholder.svg"}
                />
              </div>
              <CardContent className="p-12">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{moment(event.start_date).locale("fa").format("YYYY/M/D")}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span> ظرفیت {event.max_participants}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/events/${event.public_id}`}>
                    مشاهده جزئیات
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline">
            <Link href="/events">مشاهده تمام رویدادها</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
