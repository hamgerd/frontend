import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Searchbar() {
  return (
    <div className="mb-10">
      <div className="relative md:col-span-2">
        <Search className="text-muted-foreground absolute top-3 right-3 h-4 w-4" />
        <Input className="pr-10" placeholder="جستجوی رویداد..." />
      </div>
    </div>
  );
}
