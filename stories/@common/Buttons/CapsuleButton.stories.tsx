import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import {
  CapsuleButton,
  SelectedCapsuleButton,
  type CapsuleButtonProps,
} from "../../../src/@common";

const meta = {
  title: "@common/Buttons/BaseCapsuleButton",
  component: CapsuleButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CapsuleButton>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
  render: (args) => {
    const handleClick: CapsuleButtonProps["onClick"] = React.useCallback(
      (button) => {
        console.log(button);
      },
      [],
    );
    return (
      <>
        <CapsuleButton
          {...args}
          onClick={handleClick}
          leftButtonProps={{ children: "左" }}
          rightButtonProps={{ children: "右" }}
        />
        <br />
        <CapsuleButton
          defaultSelected={SelectedCapsuleButton.Right}
          onClick={handleClick}
          leftButtonProps={{ children: "左" }}
          rightButtonProps={{ children: "右" }}
        />
        <br />
        <CapsuleButton
          onClick={handleClick}
          leftButtonProps={{ children: "OK", color: "success" }}
          rightButtonProps={{ children: "NO", color: "error" }}
          wrapperProps={{ sx: { my: 2 } }}
        />
      </>
    );
  },
};
