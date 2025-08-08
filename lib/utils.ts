import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toFarsiNumber(number: number | string | null | undefined) {
  return number?.toLocaleString("fa-IR");
}
