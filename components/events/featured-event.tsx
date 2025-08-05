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
    <section className="flex w-full items-center justify-center py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            رویدادهای برتر
          </h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            جدیدترین و محبوب‌ترین رویدادهای در حال برگزاری
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.slice(0, 3).map(event => (
            <Card className="w-full max-w-sm overflow-hidden" key={event.public_id}>
              <div className="relative h-48">
                <Image
                  fill
                  alt={event.title}
                  className="object-cover"
                  src={event.image ?? "/placeholder.svg"}
                />
              </div>
              <CardContent className="p-12">
                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                <div className="text-muted-foreground mb-2 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{moment(event.start_date).locale("fa").format("YYYY/M/D")}</span>
                </div>
                <div className="text-muted-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
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
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/events">مشاهده تمام رویدادها</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
