"use client";
import OpenAI from "openai";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Star,
  ScanQrCode,
  ClipboardList,
  Copy,
  StickyNote,
} from "lucide-react";
import ToolTipWrapper from "@/components/ToolTipWrapper";
import { Stick } from "next/font/google";

function BackBtn() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Goes to previous page
    // OR router.push('/specific-page') for a specific route
  };
  return (
    <Button onClick={handleBack}>
      <ArrowLeft />
    </Button>
  );
}

function StarBtn() {
  return (
    <ToolTipWrapper tooltipText="Mark Item">
      <Button variant={"outline"} className="w-8 h-8">
        <Star />
      </Button>
    </ToolTipWrapper>
  );
}

function QRBtn() {
  return (
    <ToolTipWrapper tooltipText="Scan QR Code">
      <Button variant={"outline"} className="w-8 h-8">
        <ScanQrCode />
      </Button>
    </ToolTipWrapper>
  );
}

function CopyAllBtn() {
  return (
    <ToolTipWrapper tooltipText="Copy All">
      <Button variant={"outline"} className="w-8 h-8">
        <ClipboardList />
      </Button>
    </ToolTipWrapper>
  );
}

function CopyBtn() {
  return (
    <ToolTipWrapper tooltipText="Copy">
      <Button variant={"outline"} className="w-8 h-8">
        <Copy height={8} width={8} />
      </Button>
    </ToolTipWrapper>
  );
}

function DisplayStatsBtn() {
  return (
    <ToolTipWrapper tooltipText="Display Overview">
      <Button variant={"outline"} className="w-8 h-8">
        <StickyNote />
      </Button>
    </ToolTipWrapper>
  );
}

export { BackBtn, StarBtn, QRBtn, CopyAllBtn, CopyBtn, DisplayStatsBtn };
