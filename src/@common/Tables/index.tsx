/* eslint-disable react-refresh/only-export-components */
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
export type BaseTableRowProps = TableRowProps & { isInsideHead: boolean };
export type BaseTableCellProps = TableCellProps;
export type BaseTableHeadProps = TableHeadProps;
export type BaseTableBodyProps = TableBodyProps;
export type BaseTableFooterProps = TableFooterProps;
export type BaseTablePaginationProps = TablePaginationProps;

const BaseTableContainer: FC<BaseTableContainerProps> = ({
  tableWrapperProps,
  tableContentProps,
}) => {
  return (
    <TableContainer {...tableWrapperProps}>
      <Table {...tableContentProps} />
    </TableContainer>
  );
};
const BaseTableRow: FC<BaseTableRowProps> = ({ isInsideHead, ...props }) => {
  return <TableRow component={isInsideHead ? "th" : "td"} {...props} />;
};
const BaseTableCell: FC<BaseTableCellProps> = (props) => {
  return <TableCell {...props} />;
};
const BaseTableHead: FC<BaseTableHeadProps> = (props) => {
  return <TableHead {...props} />;
};
const BaseTableBody: FC<BaseTableBodyProps> = (props) => {
  return <TableBody {...props} />;
};
const BaseTableFooter: FC<BaseTableFooterProps> = (props) => {
  return <TableFooter {...props} />;
};
const BaseTablePagination: FC<BaseTablePaginationProps> = (props) => {
  return <TablePagination {...props} />;
};

type BaseTableFieldNames =
  | "Container"
  | "Row"
  | "Cell"
  | "Head"
  | "Body"
  | "Footer"
  | "Pagination";
type BaseTableFieldComponents =
  | FC<BaseTableContainerProps>
  | FC<BaseTableRowProps>
  | FC<BaseTableCellProps>
  | FC<BaseTableHeadProps>
  | FC<TableBodyProps>
  | FC<TableFooterProps>
  | FC<TablePaginationProps>;

export const BaseTable: Record<BaseTableFieldNames, BaseTableFieldComponents> =
  {
    Container: BaseTableContainer,
    Row: BaseTableRow,
    Cell: BaseTableCell,
    Head: BaseTableHead,
    Body: BaseTableBody,
    Footer: BaseTableFooter,
    Pagination: BaseTablePagination,
  };

/* eslint-enable react-refresh/only-export-components */
