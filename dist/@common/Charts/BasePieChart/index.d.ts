import * as React from "react";
import { type PieChartProps as MUIPieChartProps } from "@mui/x-charts/PieChart";
import type { PieSeriesType as MUIPieSeriesType, PieValueType as MUIPieValueType } from "@mui/x-charts/models";
export type BasePieChartDataItem = MUIPieValueType;
export type BasePieChartProps = React.PropsWithChildren<{
    dataSource: Array<BasePieChartDataItem>;
    chartProps?: Partial<MUIPieChartProps>;
    commonItemProps?: Partial<Omit<MUIPieSeriesType, "data">>;
    centerLabel?: string;
    isHalfPieChart?: boolean;
    useHighlight?: boolean;
    hiddenSideLabel?: boolean;
}>;
declare const BasePieChartMemo: React.NamedExoticComponent<BasePieChartProps>;
export default BasePieChartMemo;
