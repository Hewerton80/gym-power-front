import { getRange } from "@/utils/getRange";
import {
  DataTable,
  IColmunDataTable,
  IRowDataTable,
} from "@/components/ui/dataDisplay/DataTable";
import { Skeleton } from "@/components/ui/feedback/Skeleton";
import { twMerge } from "tailwind-merge";

interface TableSkeletonProps {
  numRows: number;
  columns: IColmunDataTable[];
}

export function TableSkeleton({ numRows, columns }: TableSkeletonProps) {
  const rows: IRowDataTable[] = getRange(numRows).map(
    (i) => ({
      value: `skeleton-${i}`,
      contents: getRange(columns.length).map((j) => (
        <Skeleton
          key={`skeleton-cell${i}-${j}`}
          className={twMerge(
            "h-4 max-w-[146px] w-full",
            j === 0 && "w-8 h-8 rounded-full"
          )}
        />
      )),
    }),
    [numRows, columns]
  );

  return <DataTable columns={columns} rows={rows} />;
}
