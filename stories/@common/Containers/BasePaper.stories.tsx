import type { Meta, StoryObj } from "@storybook/react";

import { BasePaper } from "../../../src/@common";

const meta = {
  title: "@common/Containers/BasePaper",
  component: BasePaper,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "xxxx",
  },
} satisfies Meta<typeof BasePaper>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
};
