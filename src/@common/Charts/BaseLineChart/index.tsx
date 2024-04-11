import React from "react";

import type { LineSeriesType as MUILineSeriesType } from "@mui/x-charts";
import {
  LineChart as MUILineChart,
  type LineChartProps as MUILineChartProps,
} from "@mui/x-charts/LineChart";
import {
  mangoFusionPalette,
  type ChartsColorPalette as MUIChartsColorPalette,
} from "@mui/x-charts/colorPalettes";

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

const chatColor: MUIChartsColorPalette = mangoFusionPalette;

const BaseLineChart: React.FC<BaseLineChartProps> = ({
  dataSource,
  xLabels,
  chartProps,
  commonItemProps,
  isAreaChart = false,
  couldConnectNulls = true,
  showHelperLines = true,
}) => {
  return (
    <MUILineChart
      width={chartProps?.width || 400}
      height={chartProps?.height || 200}
      colors={chatColor}
      series={dataSource.map((item) => ({
        ...item,
        area: isAreaChart,
        connectNulls: couldConnectNulls,
        ...commonItemProps,
      }))}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      axisHighlight={
        showHelperLines
          ? { x: "line", y: "line" } // Or 'none', or 'band'
          : undefined
      }
      {...chartProps}
    />
  );
};

const BaseLineChartMemo = React.memo(BaseLineChart);
export default BaseLineChartMemo;
