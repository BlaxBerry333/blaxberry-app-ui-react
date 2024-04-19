import type { FC } from "react";
import type { TableProps } from "@mui/material/Table";
import { type TableBodyProps } from "@mui/material/TableBody";
import { type TableCellProps } from "@mui/material/TableCell";
import { type TableContainerProps } from "@mui/material/TableContainer";
import { type TableFooterProps } from "@mui/material/TableFooter";
import { type TableHeadProps } from "@mui/material/TableHead";
import { type TablePaginationProps } from "@mui/material/TablePagination";
import { type TableRowProps } from "@mui/material/TableRow";
export type BaseTableContainerProps = {
    tableWrapperProps?: TableContainerProps;
    tableContentProps?: TableProps;
};
export type BaseTableRowProps = TableRowProps & {
    isInsideHead: boolean;
};
export type BaseTableCellProps = TableCellProps;
export type BaseTableHeadProps = TableHeadProps;
export type BaseTableBodyProps = TableBodyProps;
export type BaseTableFooterProps = TableFooterProps;
export type BaseTablePaginationProps = TablePaginationProps;
type BaseTableFieldNames = "Container" | "Row" | "Cell" | "Head" | "Body" | "Footer" | "Pagination";
type BaseTableFieldComponents = FC<BaseTableContainerProps> | FC<BaseTableRowProps> | FC<BaseTableCellProps> | FC<BaseTableHeadProps> | FC<TableBodyProps> | FC<TableFooterProps> | FC<TablePaginationProps>;
export declare const BaseTable: Record<BaseTableFieldNames, BaseTableFieldComponents>;
export {};
