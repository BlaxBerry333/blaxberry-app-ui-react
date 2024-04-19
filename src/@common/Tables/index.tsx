import type { FC } from "react";

import type { TableProps } from "@mui/material/Table";
import Table from "@mui/material/Table";
import TableBody, { type TableBodyProps } from "@mui/material/TableBody";
import TableCell, { type TableCellProps } from "@mui/material/TableCell";
import TableContainer, {
  type TableContainerProps,
} from "@mui/material/TableContainer";
import TableFooter, { type TableFooterProps } from "@mui/material/TableFooter";
import TableHead, { type TableHeadProps } from "@mui/material/TableHead";
import TablePagination, {
  type TablePaginationProps,
} from "@mui/material/TablePagination";
import TableRow, { type TableRowProps } from "@mui/material/TableRow";

export type BaseTableContainerProps = {
  tableWrapperProps?: TableContainerProps;
  tableContentProps?: TableProps;
};
export const BaseTableContainer: FC<BaseTableContainerProps> = ({
  tableWrapperProps,
  tableContentProps,
}) => {
  return (
    <TableContainer {...tableWrapperProps}>
      <Table {...tableContentProps} />
    </TableContainer>
  );
};

export type BaseTableRowProps = TableRowProps;
export const BaseTableRow: FC<BaseTableRowProps> = (props) => {
  return <TableRow {...props} />;
};

export type BaseTableCellProps = TableCellProps & { isInsideHead: boolean };
export const BaseTableCell: FC<BaseTableCellProps> = ({
  isInsideHead,
  ...props
}) => {
  return <TableCell component={isInsideHead ? "th" : "td"} {...props} />;
};

export type BaseTableHeadProps = TableHeadProps;
export const BaseTableHead: FC<BaseTableHeadProps> = (props) => {
  return <TableHead {...props} />;
};

export type BaseTableBodyProps = TableBodyProps;
export const BaseTableBody: FC<BaseTableBodyProps> = (props) => {
  return <TableBody {...props} />;
};

export type BaseTableFooterProps = TableFooterProps;
export const BaseTableFooter: FC<BaseTableFooterProps> = (props) => {
  return <TableFooter {...props} />;
};

export type BaseTablePaginationProps = TablePaginationProps;
export const BaseTablePagination: FC<BaseTablePaginationProps> = (props) => {
  return <TablePagination {...props} />;
};
