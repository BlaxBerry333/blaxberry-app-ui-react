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
export declare const BaseTableContainer: FC<BaseTableContainerProps>;
export type BaseTableRowProps = TableRowProps;
export declare const BaseTableRow: FC<BaseTableRowProps>;
export type BaseTableCellProps = TableCellProps & {
    isInsideHead: boolean;
};
export declare const BaseTableCell: FC<BaseTableCellProps>;
export type BaseTableHeadProps = TableHeadProps;
export declare const BaseTableHead: FC<BaseTableHeadProps>;
export type BaseTableBodyProps = TableBodyProps;
export declare const BaseTableBody: FC<BaseTableBodyProps>;
export type BaseTableFooterProps = TableFooterProps;
export declare const BaseTableFooter: FC<BaseTableFooterProps>;
export type BaseTablePaginationProps = TablePaginationProps;
export declare const BaseTablePagination: FC<BaseTablePaginationProps>;
