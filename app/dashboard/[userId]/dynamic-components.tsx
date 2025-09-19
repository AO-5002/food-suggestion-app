"use client";
import { useRouter, usePathname } from "next/navigation";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

function LearnMoreBtn() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLearn = () => {
    router.push(`${pathname}/1`);
  };
  return <Button onClick={handleLearn}>Learn More</Button>;
}

function NewGeneration() {
  return (
    <Button>
      <RotateCcw />
    </Button>
  );
}

export { LearnMoreBtn, NewGeneration };
