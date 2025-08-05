import FeaturedEvent from "@/components/events/featured-event";
import HeroSection from "@/components/feature-parts/hero-section";
import PlatformFeatures from "@/components/feature-parts/platform-features";
import CallToAction from "@/components/shared/call-to-action";
import DevAlert from "@/components/shared/dev-alert";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <DevAlert />
      <HeroSection />
      <FeaturedEvent />
      <PlatformFeatures />
      <CallToAction />
    </main>
  );
}
