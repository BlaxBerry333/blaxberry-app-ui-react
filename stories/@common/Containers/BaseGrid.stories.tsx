import type { Meta, StoryObj } from "@storybook/react";

import { BaseGrid } from "../../../src/@common";

const meta = {
  title: "@common/Containers/BaseGrid",
  component: BaseGrid,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseGrid>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
  args: {
    gridContainerProps: {
      style: { padding: 8, backgroundColor: "skyblue" },
    },
    commonGridItemProps: {
      style: { padding: 8, backgroundColor: "pink" },
    },
    data: [
      {
        gridItemProps: { xs: 4 },
        id: "AAA",
        children: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      { gridItemProps: { xs: 4 }, id: "BBB", children: "BBB" },
      { gridItemProps: { xs: 4 }, id: "CCC", children: "CCC" },
      { gridItemProps: { xs: 8 }, id: "DDD", children: "DDD" },
      { gridItemProps: { xs: 4 }, id: "EEE", children: "EEE" },
      {
        gridItemProps: {
          xs: 12,
          style: { backgroundColor: "grey", fontWeight: 600, color: "white" },
        },
        id: "FFF",
        children: "FFF",
      },
    ],
  },
};
