"use client";
import React, { ComponentPropsWithRef, ReactNode } from "react";
import { Table } from "@/components/ui/dataDisplay/Table/Table";
import { FeedBackError } from "@/components/ui/feedback/FeedBackError";
import { TableSkeleton } from "@/components/ui/feedback/TableSkeleton";

export interface IColmunDataTable<T = any> {
  field: keyof T | "actions";
  content: ReactNode;
}
export interface IRowDataTable {
  value: string;
  contents: ReactNode[];
}

export interface DataTableProps
  extends Omit<ComponentPropsWithRef<"div">, "children"> {
  columns: IColmunDataTable[];
  rows: IRowDataTable[];
  isError?: boolean;
  numSkeletonRows?: number;
  isLoading?: boolean;
  onTryAgainIfError?: () => void;
}

export function DataTable({
  columns,
  rows,
  isError,
  isLoading,
  numSkeletonRows = 15,
  onTryAgainIfError,
  ...restProps
}: DataTableProps) {
  if (isError) {
    return <FeedBackError onTryAgain={onTryAgainIfError} />;
  }

  if (isLoading) {
    return <TableSkeleton columns={columns} numRows={numSkeletonRows} />;
  }

  return (
    <>
      <Table.Container className="hidden sm:flex flex-col" {...restProps}>
        <Table>
          <Table.Head>
            <Table.Roll>
              {columns.map((col, i) => (
                <Table.HeadCell key={`col-${i}`}>{col.content}</Table.HeadCell>
              ))}
            </Table.Roll>
          </Table.Head>
          <Table.Body>
            {rows.map((row, i) => (
              <Table.Roll key={`${row.value}-${i}`}>
                {row.contents.map((content, j) => (
                  <Table.Data key={`${row.value}-${i}-${j}`}>
                    {content}
                  </Table.Data>
                ))}
              </Table.Roll>
            ))}
          </Table.Body>
        </Table>
        {rows.length === 0 && (
          <div className="flex justify-center items-center p-8">
            <h5 className="text-2xl text-gray-70">Tabela vazia</h5>
          </div>
        )}
      </Table.Container>
      <div
        className="flex sm:hidden flex-col divide-y-2 divide-black"
        role="table"
      >
        {rows.map((row, i) => (
          <div
            className="flex flex-col divide-y divide-border text-xs py-2"
            key={`${row.value}-${i}-resposive`}
          >
            {row.contents.map((content, j) => (
              <div
                className="flex flex-col py-1"
                key={`${row.value}-${i}-${j}-responsive`}
              >
                {columns[j].content && (
                  <div className="text-black font-bold">
                    {columns[j].content}:
                  </div>
                )}
                <div>{content}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
