import Link from "next/link";

import { Button } from "@/components/ui/button";

interface CreatePromptCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CreatePromptCard({
  title,
  description,
  buttonText,
  buttonHref,
}: CreatePromptCardProps) {
  return (
    <div className="bg-muted mx-4 mt-12 flex flex-col items-center gap-4 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <Button size="lg" className="mt-2">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </div>
  );
}
