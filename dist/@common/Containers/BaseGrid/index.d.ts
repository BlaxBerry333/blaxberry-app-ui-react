import { type GridProps } from "@mui/material/Grid";
import React, { type PropsWithChildren } from "react";
export type BaseGridProps = {
    data: Array<BaseGridItem>;
    gridContainerProps?: Omit<GridProps, "container" | "item" | "spacing">;
    commonGridItemProps?: Omit<GridProps, "container" | "item" | "spacing">;
};
export type BaseGridItem = PropsWithChildren<{
    id: string;
    gridItemProps?: Omit<GridProps, "container" | "item" | "spacing">;
}>;
declare const BaseGridMemo: React.NamedExoticComponent<BaseGridProps>;
export default BaseGridMemo;
