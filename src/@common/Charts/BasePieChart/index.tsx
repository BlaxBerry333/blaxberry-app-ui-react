import * as React from "react";

import {
  PieChart as MUIPieChart,
  type PieChartProps as MUIPieChartProps,
} from "@mui/x-charts/PieChart";
import {
  mangoFusionPalette,
  type ChartsColorPalette as MUIChartsColorPalette,
} from "@mui/x-charts/colorPalettes";
import type {
  PieSeriesType as MUIPieSeriesType,
  PieValueType as MUIPieValueType,
} from "@mui/x-charts/models";

import BasePieChartCenterLabel from "../BaseBarChart/BasePieChartCenterLabel";

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

const chatColor: MUIChartsColorPalette = mangoFusionPalette;
const seriesHighlightedProps: Pick<
  MUIPieSeriesType,
  "highlightScope" | "faded"
> = {
  highlightScope: { faded: "global", highlighted: "item" },
  faded: { innerRadius: 0, additionalRadius: -20, color: "gray" },
};
const seriesHalfChartProps: Pick<MUIPieSeriesType, "startAngle" | "endAngle"> =
  {
    startAngle: -90,
    endAngle: 90,
  };

const BasePieChart: React.FC<BasePieChartProps> = ({
  dataSource,
  centerLabel = "",
  chartProps,
  commonItemProps,
  isHalfPieChart = false,
  useHighlight = false,
  hiddenSideLabel = false,
}) => {
  const allDataWithoutLabel = React.useMemo(
    () => dataSource.every((item) => !item.label),
    [dataSource],
  );

  return (
    <MUIPieChart
      width={chartProps?.width || 400}
      height={chartProps?.height || 200}
      colors={chatColor}
      series={[
        {
          data: dataSource,
          ...(useHighlight ? seriesHighlightedProps : {}),
          ...(isHalfPieChart ? seriesHalfChartProps : {}),
          ...commonItemProps,
        },
      ]}
      {...chartProps}
      margin={{ right: hiddenSideLabel || allDataWithoutLabel ? 0 : 50 }}
      slotProps={{ legend: { hidden: hiddenSideLabel || allDataWithoutLabel } }}
    >
      {centerLabel && (
        <BasePieChartCenterLabel>{centerLabel}</BasePieChartCenterLabel>
      )}
    </MUIPieChart>
  );
};

const BasePieChartMemo = React.memo(BasePieChart);
export default BasePieChartMemo;
