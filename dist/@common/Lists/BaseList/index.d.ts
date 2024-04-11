import { type ListProps } from "@mui/material/List";
import { type ListSubheaderProps } from "@mui/material/ListSubheader";
import * as React from "react";
export type BaseListProps = React.PropsWithChildren<{
    listProps?: ListProps;
    listSubheaderProps?: ListSubheaderProps;
}>;
declare const BaseListMemo: React.NamedExoticComponent<BaseListProps>;
export default BaseListMemo;
