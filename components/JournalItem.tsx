"use client";
import React from "react";
import { Button } from "./ui/button";
import { Notebook } from "lucide-react";

function JournalItem() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none rounded-full hover:opacity-80"
    >
      <Notebook />
    </Button>
  );
}

export default JournalItem;
