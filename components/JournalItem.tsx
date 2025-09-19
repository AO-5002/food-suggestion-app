"use client";
import React, { use } from "react";
import { Button } from "./ui/button";
import { Notebook } from "lucide-react";
import { useRouter } from "next/dist/client/components/navigation";

function JournalItem() {
  const router = useRouter();
  function handleClick() {
    router.push("/dashboard/1/journal");
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none rounded-full hover:opacity-80"
      onClick={handleClick}
    >
      <Notebook />
    </Button>
  );
}

export default JournalItem;
