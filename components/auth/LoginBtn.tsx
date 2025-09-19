"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/components/firebase/auth"; // Import your function
import { useRouter } from "next/navigation";

export function LoginBtn() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("Successfully logged in with Google");
      router.push("/post-login-redirect"); // Redirect to dashboard or wherever you want
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Button variant="outline" onClick={handleLogin}>
      Get Started!
    </Button>
  );
}
