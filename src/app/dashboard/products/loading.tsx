import { Skeleton } from "@/components/ui/skeleton";
export default function LoadingPage() {
    const array = new Array(12).fill(null);
  return (
    <div className="flex flex-wrap gap-4">
        {array.map((_,i) => (
            <Skeleton key={i} className="h-[125px] w-[250px] rounded-xl"/>
        ))}
      </div>
  );
}