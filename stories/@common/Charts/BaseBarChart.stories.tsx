import type { Meta, StoryObj } from "@storybook/react";

import { BaseBarChart } from "../../../src/@common";

const meta = {
  title: "@common/Charts/BaseBarChart",
  component: BaseBarChart,
  parameters: {
    layout: "centered",
  },
  args: {
    xLabels: ["AA", "BB", "CC", "DD", "EE", "FF", "GG"],
    dataSource: [
      {
        id: "NO.1",
        label: "NO.1",
        data: [4000, 3000, 2000, -2780, -1890, 2390, 3490],
        color: "crimson",
      },
      {
        id: "NO.2",
        label: "NO.2",
        data: [2400, 1398, 9800, 3908, -4800, -3800, 4300],
      },
    ],
    chartProps: {
      width: 500,
      height: 300,
    },
    isStacking: false,
    isColumChart: false,
    showHelperLines: true,
  },
} satisfies Meta<typeof BaseBarChart>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
};
