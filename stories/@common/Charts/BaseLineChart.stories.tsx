import type { Meta, StoryObj } from "@storybook/react";

import { BaseLineChart } from "../../../src/@common";

const meta = {
  title: "@common/Charts/BaseLineChart",
  component: BaseLineChart,
  parameters: {
    layout: "centered",
  },
  args: {
    xLabels: ["AA", "BB", "CC", "DD", "EE", "FF", "GG"],
    dataSource: [
      {
        id: "NO.1",
        label: "NO.1",
        data: [4000, 3000, 200, 2780, null, 2390, 3490],
        color: "crimson",
      },
      {
        id: "No.2",
        label: "No.2",
        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
      },
    ],
    chartProps: {
      width: 500,
      height: 300,
    },
    isAreaChart: false,
    couldConnectNulls: true,
    showHelperLines: true,
  },
} satisfies Meta<typeof BaseLineChart>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
};
