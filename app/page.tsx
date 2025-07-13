"use client";
import FeaturedEvent from "@/components/featured-event";
import DevAlert from "@/components/dev-alert";
import HeroSection from "@/components/hero-section";
import PlatformFeatures from "@/components/platform-features";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <DevAlert />
      <HeroSection />
      <FeaturedEvent />
      <PlatformFeatures />
      <CallToAction />
    </main>
  );
}
