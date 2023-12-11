import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
      <div className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between space-x-8">
        <Skeleton className="w-1/2 h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
      </div>
      <div className="flex flex-col space-y-2 container py-16">
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      </div>
    </div>
    )
  }