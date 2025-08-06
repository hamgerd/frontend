"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import EventImageBanner from "@/components/events/event-image-banner";
import EventMetaInfo from "@/components/events/event-meta-info";
import EventOrganizerCard from "@/components/events/event-organizer-card";
import EventRegisterCard from "@/components/events/event-register-card";
import EventTabs from "@/components/events/event-tabs";
import PaymentConfirm from "@/components/payment/payment-confirm";
import { Button } from "@/components/ui/button";
import useEventPage from "@/hooks/use-event-page";

export default function EventPage() {
  const {
    eventDetails,
    speakers,
    isLoading,
    showConfirmationDialog,
    setShowConfirmationDialog,
    createTicket,
    startPayment,
  } = useEventPage();

  if (!eventDetails) {
    return (
      <div className="container flex flex-col py-10 lg:mx-auto">
        <div className="mx-4">
          <div className="mb-6 flex items-center">
            <Button asChild size="sm" variant="outline">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                بازگشت به رویدادها
              </Link>
            </Button>
          </div>
          <div className="flex h-64 items-center justify-center">
            <p>در حال بارگذاری اطلاعات رویداد...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-opacity-50 fixed inset-0 z-100 flex items-center justify-center bg-black">
        <div className="text-lg text-white">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="container flex flex-col py-10 lg:mx-auto">
        <div className="mx-4">
          <div className="mb-6 flex items-center">
            <Button asChild size="sm" variant="outline">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                بازگشت به رویدادها
              </Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="lg:w-8/12">
              <EventImageBanner
                image={eventDetails.image}
                title={eventDetails.title}
                category={eventDetails.category}
              />
              <h1 className="mb-4 flex text-3xl font-bold">{eventDetails.title}</h1>

              <EventMetaInfo
                endDate={eventDetails.end_date}
                maxParticipants={eventDetails.max_participants}
                startDate={eventDetails.start_date}
                location={eventDetails.location}
              />
              <EventTabs eventDetails={eventDetails} speakers={speakers} />
            </div>
            <div className="lg:w-4/12">
              <EventRegisterCard
                capacity={eventDetails.ticket_types[0]?.max_participants}
                price={eventDetails.ticket_types[0]?.price}
                onRegister={createTicket}
              />
              <EventOrganizerCard organization={eventDetails.organization} />
            </div>
          </div>
        </div>
      </div>

      <PaymentConfirm
        ticketName={eventDetails.title}
        ticketPrice={eventDetails.ticket_types[0]?.price.toLocaleString()}
        onCancel={() => setShowConfirmationDialog(false)}
        onConfirm={() => {
          setShowConfirmationDialog(false);
          startPayment();
        }}
        open={showConfirmationDialog}
      />
    </div>
  );
}
