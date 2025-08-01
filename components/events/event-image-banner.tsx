import Image from "next/image";

interface EventImageBannerProps {
  image?: string;
  title: string;
  category?: string;
}

export default function EventImageBanner({ image, title, category }: EventImageBannerProps) {
  return (
    <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden mb-6">
      <Image fill alt={title} className="object-cover" src={image ?? "/placeholder.svg"} />
      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md">
        {category ?? null}
      </div>
    </div>
  );
}
