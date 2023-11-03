"use client";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

interface TableContainerProps extends ComponentPropsWithRef<"div"> {}
interface TableProps extends ComponentPropsWithRef<"table"> {}
interface TbodyProps extends ComponentPropsWithRef<"tbody"> {}
interface TheadProps extends ComponentPropsWithRef<"thead"> {}
interface ThProps extends ComponentPropsWithRef<"th"> {}
interface TrProps extends ComponentPropsWithRef<"tr"> {}
interface TdProps extends ComponentPropsWithRef<"td"> {}

function Table({ children, className, ...restProps }: TableProps) {
  return (
    <table className={twMerge("w-full")} {...restProps}>
      {children}
    </table>
  );
}

function TableContainer({
  className,
  children,
  ...restProps
}: TableContainerProps) {
  return (
    <div
      className={twMerge("w-full overflow-x-auto custom-scroll", className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Thead({ children, className, ...restProps }: TheadProps) {
  return (
    <thead
      className={twMerge(
        "text-xs text-black font-bold border-b border-b-border",
        className
      )}
      {...restProps}
    >
      {children}
    </thead>
  );
}

function Th({ children, className, ...restProps }: ThProps) {
  return (
    <th
      className={twMerge("p-5 align-top text-left", className)}
      {...restProps}
    >
      {children}
    </th>
  );
}

function Tr({ children, className, ...restProps }: TrProps) {
  return (
    <tr
      className={twMerge("[&+&]:border-t border-b-border", className)}
      {...restProps}
    >
      {children}
    </tr>
  );
}

function Tbody({ children, className, ...restProps }: TbodyProps) {
  return (
    <tbody
      className={twMerge("text-sm text-body-text font-normal", className)}
      {...restProps}
    >
      {children}
    </tbody>
  );
}

function Td({ children, className, ...restProps }: TdProps) {
  return (
    <td className={twMerge("py-3 px-5", className)} {...restProps}>
      {children}
    </td>
  );
}

Table.Container = TableContainer;
Table.Head = Thead;
Table.HeadCell = Th;
Table.Roll = Tr;
Table.Body = Tbody;
Table.Data = Td;

export { Table };
