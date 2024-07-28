import { Skeleton } from "../ui/skeleton";

function CommentSkeleton({ count }: { count: number }) {
  const items = Array.from(
    { length: count },
    (_, index) => `Item ${index + 1}`
  );
  return (
    <div className="flex flex-col gap-4">
      {items.map((_, index) => (
        <div className="flex items-center space-x-4" key={index}>
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentSkeleton;
