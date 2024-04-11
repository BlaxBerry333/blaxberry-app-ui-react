import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BaseIconButton } from "../../../src/@common";

const meta = {
  title: "@common/Buttons/BaseIconButton",
  component: BaseIconButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BaseIconButton>;

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
          <BaseIconButton {...args}>
            <HomeOutlinedIcon />
          </BaseIconButton>
          <BaseIconButton {...args} variant="text">
            <HomeOutlinedIcon />
          </BaseIconButton>
          <BaseIconButton {...args} variant="contained">
            <HomeOutlinedIcon />
          </BaseIconButton>
        </div>

        <div>
          <BaseIconButton {...args}>ABCDEFG</BaseIconButton>
          <BaseIconButton {...args}>?</BaseIconButton>
          <BaseIconButton {...args} disabled>
            ?
          </BaseIconButton>
        </div>

        <div>
          <BaseIconButton {...args} color="error">
            <HomeOutlinedIcon />
          </BaseIconButton>
          <BaseIconButton {...args} color="success">
            <HomeOutlinedIcon />
          </BaseIconButton>
          <BaseIconButton {...args} color="secondary">
            <HomeOutlinedIcon />
          </BaseIconButton>
        </div>
      </>
    );
  },
};
