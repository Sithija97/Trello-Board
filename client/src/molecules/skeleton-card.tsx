import { Skeleton } from "../atoms/ui/skeleton";

type IProps = {
  customClassNames?: string;
};

export function SkeletonCard({ customClassNames }: IProps) {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className={`h-[125px] w-full rounded-xl ${customClassNames}`} />
    </div>
  );
}
