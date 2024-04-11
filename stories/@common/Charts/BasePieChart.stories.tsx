import type { Meta, StoryObj } from "@storybook/react";

import { BasePieChart } from "../../../src/@common";

const meta = {
  title: "@common/Charts/BasePieChart",
  component: BasePieChart,
  parameters: {
    layout: "centered",
  },
  args: {
    dataSource: [
      { id: "0", value: 10, label: "A" },
      { id: "1", value: 15, label: "B" },
      { id: "2", value: 30, label: "C" },
      { id: "3", value: 10, label: "D", color: "pink" },
    ],
    centerLabel: " ",
    chartProps: {
      width: 400,
      height: 200,
      legend: { hidden: false },
      margin: { right: 100 },
    },
    commonItemProps: {
      paddingAngle: 0,
      innerRadius: 0,
      cornerRadius: 0,
      arcLabel: (item): string => {
        // const total = data.map((item) => item.value).reduce((a, b) => a + b, 0)
        // const percent = `${((item.value / total) * 100).toFixed(0)}%`;
        return item.id === "2" ? `${item.label}-${item.value}` : "";
      },
    },
    isHalfPieChart: false,
    useHighlight: false,
    hiddenSideLabel: false,
  },
} satisfies Meta<typeof BasePieChart>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
};
