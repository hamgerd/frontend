"use client";
import type { Event } from "@/models/event";
import type { Speaker } from "@/models/speaker";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventTabsProps {
  speakers: Speaker[];
  eventDetails: Event;
}

export default function EventTabs({ speakers, eventDetails }: EventTabsProps) {
  return (
    <Tabs defaultValue="about">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="about">درباره</TabsTrigger>
        <TabsTrigger value="speakers">سخنرانان</TabsTrigger>
      </TabsList>

      <TabsContent dir="rtl" className="mt-6" value="about">
        <p className="mb-6 whitespace-pre-line">{eventDetails.description}</p>
        <h3 className="text-lg font-bold mb-2">محل برگزاری: </h3>
        <p className="mb-6">{eventDetails.location}</p>
        <div className="rounded-lg overflow-hidden h-64 bg-muted flex items-center justify-center text-muted-foreground">
          نقشه محل برگزاری
        </div>
      </TabsContent>

      <TabsContent dir="rtl" className="mt-6" value="speakers">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {speakers.map(speaker => (
            <Card key={speaker.public_id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={speaker.image || "/placeholder.svg"} />
                    <AvatarFallback>{speaker.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">{speaker.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
