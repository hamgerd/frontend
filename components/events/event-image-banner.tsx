import Image from "next/image";

interface EventImageBannerProps {
  image: string | null | undefined;
  title: string;
  category?: number | null;
}

export default function EventImageBanner({ image, title, category }: EventImageBannerProps) {
  return (
    <div className="relative mb-6 h-72 overflow-hidden rounded-lg sm:h-96">
      <Image fill alt={title} className="object-cover" src={image ?? "/placeholder.svg"} />
      <div className="bg-primary text-primary-foreground absolute top-4 right-4 rounded-md px-3 py-1">
        {category ?? null}
      </div>
    </div>
  );
}
