import React from "react";
import type { LineSeriesType as MUILineSeriesType } from "@mui/x-charts";
import { type LineChartProps as MUILineChartProps } from "@mui/x-charts/LineChart";
export type BaseLineChartDataItem = Partial<MUILineSeriesType>;
export type BaseLineChartProps = {
    dataSource: Array<BaseLineChartDataItem>;
    xLabels: Array<string>;
    chartProps?: Omit<MUILineChartProps, "series">;
    commonItemProps?: Omit<BaseLineChartDataItem, "id" | "label" | "data">;
    isAreaChart?: boolean;
    couldConnectNulls?: boolean;
    showHelperLines?: boolean;
};
declare const BaseLineChartMemo: React.NamedExoticComponent<BaseLineChartProps>;
export default BaseLineChartMemo;
