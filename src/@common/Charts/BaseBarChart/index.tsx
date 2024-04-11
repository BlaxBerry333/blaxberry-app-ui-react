import React from "react";

import {
  BarChart as MUIBarChart,
  type BarChartProps as MUIBarChartProps,
} from "@mui/x-charts/BarChart";
import {
  mangoFusionPalette,
  type ChartsColorPalette as MUIChartsColorPalette,
} from "@mui/x-charts/colorPalettes";
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

const chatColor: MUIChartsColorPalette = mangoFusionPalette;

const BaseBarChart: React.FC<BaseBarChartProps> = ({
  dataSource,
  xLabels,
  chartProps,
  commonItemProps,
  isStacking = false,
  isColumChart = false,
  showHelperLines = true,
}) => {
  return (
    <MUIBarChart
      width={chartProps?.width || 400}
      height={chartProps?.height || 200}
      colors={chatColor}
      series={dataSource?.map((item) => ({
        ...item,
        stack: isStacking ? "xxxxxxxx" : undefined,
        ...commonItemProps,
      }))}
      xAxis={!isColumChart ? [{ data: xLabels, scaleType: "band" }] : undefined}
      yAxis={isColumChart ? [{ data: xLabels, scaleType: "band" }] : undefined}
      axisHighlight={
        showHelperLines
          ? { x: "line", y: "line" } // Or 'none', or 'band'
          : undefined
      }
      layout={isColumChart ? "horizontal" : "vertical"}
      {...chartProps}
    />
  );
};

const BaseBarChartMemo = React.memo(BaseBarChart);
export default BaseBarChartMemo;
