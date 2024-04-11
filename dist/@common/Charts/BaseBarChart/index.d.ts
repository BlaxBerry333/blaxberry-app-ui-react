import React from "react";
import { type BarChartProps as MUIBarChartProps } from "@mui/x-charts/BarChart";
import type { BarSeriesType as MUIBarSeriesType } from "@mui/x-charts/models";
export type BaseBarChartDataItem = Partial<MUIBarSeriesType>;
export type BaseBarChartProps = {
    dataSource: Array<BaseBarChartDataItem>;
    xLabels: Array<string>;
    chartProps?: Omit<MUIBarChartProps, "series">;
    commonItemProps?: Omit<BaseBarChartDataItem, "id" | "label" | "data">;
    isStacking?: boolean;
    isColumChart?: boolean;
    showHelperLines?: boolean;
};
declare const BaseBarChartMemo: React.NamedExoticComponent<BaseBarChartProps>;
export default BaseBarChartMemo;
