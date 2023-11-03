"use client";
import React, { ComponentPropsWithRef, ReactNode } from "react";
import { Table } from "../Table";

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
}

export function DataTable({ columns, rows, ...restProps }: DataTableProps) {
  return (
    <Table.Container {...restProps}>
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
  );
}
