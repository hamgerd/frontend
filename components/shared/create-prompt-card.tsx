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
    <div className="flex flex-col items-center gap-4 text-center mt-12 bg-muted p-8 rounded-lg mx-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <Button disabled size="lg" className="mt-2">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </div>
  );
}
