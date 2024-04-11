import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BaseButton } from "../../../src/@common";

const meta = {
  title: "@common/Buttons/BaseButton",
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseButton>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
  render: (args) => {
    const handle = React.useCallback(() => {}, []);
    return (
      <>
        <div>
          <BaseButton {...args}>ABCDEFG</BaseButton>
          <BaseButton {...args} variant="text">
            xxx
          </BaseButton>
          <BaseButton {...args} variant="contained">
            xxx
          </BaseButton>
        </div>

        <div>
          <BaseButton {...args} color="error">
            ABCDEFG
          </BaseButton>
          <BaseButton {...args}>?</BaseButton>
          <BaseButton {...args} disabled>
            ?
          </BaseButton>
        </div>
      </>
    );
  },
};
