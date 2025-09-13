import React from "react";

interface OnboardLayoutProps {
  children: React.ReactNode;
  questionPrompt: React.ReactNode;
}

function OnboardLayout({ children, questionPrompt }: OnboardLayoutProps) {
  return (
    <main className="w-full h-screen grid grid-cols-1 md:grid-cols-[360px_1fr] xl:grid-cols-[480px_1fr]">
      <div className="hidden md:flex flex-col items-center justify-center col-start-1 col-span-1 md:col-start-1 md:col-span-1 xl:col-start-1 bg-foreground text-background border-r border-zinc-200">
        {questionPrompt}
      </div>
      <div className="p-4 md:p-8 col-start-1 col-span-1 md:col-start-2 md:col-span-6 xl:col-start-3 xl:col-span-8 m-12">
        {children}
      </div>
    </main>
  );
}

export default OnboardLayout;
