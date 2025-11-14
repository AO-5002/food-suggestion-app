import React from "react";

interface OnboardLayoutProps {
  children: React.ReactNode;
  questionPrompt: React.ReactNode;
}

function OnboardLayout({ children, questionPrompt }: OnboardLayoutProps) {
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Side Panel - Progress Tracker */}
      <aside className="hidden md:flex md:w-80 lg:w-96 flex-col items-center justify-center bg-foreground text-background border-r border-zinc-200 flex-shrink-0 sticky top-0 h-screen">
        {questionPrompt}
      </aside>

      {/* Main Content Area - Fully Dynamic */}
      <div className="flex-1 flex items-center justify-center min-h-screen">
        {/* Container that scales with available space */}
        <div className="w-full px-6 py-12 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </div>
    </main>
  );
}

export default OnboardLayout;
