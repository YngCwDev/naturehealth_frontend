import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-[400px] w-full rounded-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-20 w-20 rounded-md" />
            <Skeleton className="h-20 w-20 rounded-md" />
            <Skeleton className="h-20 w-20 rounded-md" />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <div className="flex justify-between">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-6 w-1/4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-10 w-1/3" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
          <Skeleton className="h-24 w-full rounded-md" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    </div>
  );
}
