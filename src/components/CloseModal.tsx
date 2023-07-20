"use client";
import { X } from "lucide-react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export function CloseModal() {
  const router = useRouter();
  return (
    <Button
      variant="subtle"
      aria-label="close modal"
      onClick={() => router.back()}
      className="h-6 w-6 p-0 rounded-md"
    >
      <X className="w-4 h-4" />
    </Button>
  );
}
