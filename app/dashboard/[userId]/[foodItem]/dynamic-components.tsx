"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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

export { BackBtn };
