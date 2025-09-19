import { EnterBtn } from "./dynamic-components";
import { LoginBtn } from "@/components/auth/LoginBtn";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoginBtn />
        <EnterBtn />
      </div>
    </div>
  );
}
