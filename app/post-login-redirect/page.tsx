"use client";
import LoadingState from "@/components/Skeletons/LoadingState";
import { SkeletonLayout } from "@/layouts/SkeletonLayout";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function PostLoginRedirect() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [delayComplete, setDelayComplete] = useState(false);

  useEffect(() => {
    // Add 2 second delay
    const timer = setTimeout(() => {
      setDelayComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && isAuthenticated && user && delayComplete) {
      // Redirect to dashboard with user ID after delay
      router.push(`/onboarding/${user.uid}`);
    } else if (!isLoading && !isAuthenticated && delayComplete) {
      // If not authenticated, redirect to login after delay
      router.push("/app");
    }
  }, [isLoading, isAuthenticated, user, delayComplete, router]);

  return (
    <SkeletonLayout>
      <div className="text-center mt-4">
        {isAuthenticated ? <LoadingState /> : <LoadingState />}
      </div>
    </SkeletonLayout>
  );
}

export default PostLoginRedirect;
