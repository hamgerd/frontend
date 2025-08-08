import Image from "next/image";

interface EventImageBannerProps {
  image: string | null | undefined;
  title: string;
}

export default function EventImageBanner({ image, title }: EventImageBannerProps) {
  return (
    <div className="relative mb-6 h-72 overflow-hidden rounded-lg sm:h-96">
      <Image fill alt={title} className="object-cover" src={image ?? "/placeholder.svg"} />
    </div>
  );
}
