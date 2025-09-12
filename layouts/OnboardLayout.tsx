import React from "react";

function OnboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 p-12">
      <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-6 xl:col-start-3 xl:col-span-8 p-4 lg:p-8">
        {children}
      </div>
    </main>
  );
}

export default OnboardLayout;
