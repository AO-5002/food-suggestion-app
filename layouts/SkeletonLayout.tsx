import { Skeleton } from "@/components/ui/skeleton";

function SkeletonLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen grid grid-cols-1 grid-rows-[48px_1fr] md:grid-cols-8 xl:grid-cols-12 p-12">
      <div className="row-start-1 col-start-1 col-span-1 md:col-start-2 md:col-span-6 xl:col-start-3 xl:col-span-8 sticky top-4 z-50">
        <Skeleton
          className="h-[36px] py-2
                bg-foreground/10 backdrop-blur-xl border border-white/20
                rounded-2xl shadow-lg px-12"
        />
      </div>
      <div className="row-start-2 col-start-1 col-span-1 md:col-start-2 md:col-span-6 xl:col-start-3 xl:col-span-8 px-4 py-8 lg:p-8">
        {children}
      </div>
    </main>
  );
}

export { SkeletonLayout };
