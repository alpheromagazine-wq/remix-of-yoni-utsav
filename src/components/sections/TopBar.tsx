import { TriangleAlert } from "lucide-react";

export const TopBar = () => {
  return (
    <section className="bg-primary py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-primary-foreground">
          <TriangleAlert className="h-5 w-5 animate-pulse flex-shrink-0" />
          <p className="text-sm md:text-base font-medium text-center max-w-full w-[75%] md:w-fit">
            <span className="font-bold">ध्यान दें:</span> 78% भारतीय महिलाएं इस समस्या से चुपचाप जूझ रही हैं — आज ही समाधान पाएं!
          </p>
          <TriangleAlert className="h-5 w-5 animate-pulse flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};
