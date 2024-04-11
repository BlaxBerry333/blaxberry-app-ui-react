import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  BaseUncontrolledDialog,
  type BaseUncontrolledDialogRef,
} from "../../../src/@common";
import BaseControlledDialogStoriesMeta, {
  ExampleBuiltinContent,
} from "./BaseControlledDialog.stories";

const meta = {
  title: "@common/Dialogs/BaseUncontrolledDialog",
  component: BaseUncontrolledDialog,
  parameters: {
    layout: "centered",
  },
  argTypes: BaseControlledDialogStoriesMeta.argTypes,
  args: {
    ...BaseControlledDialogStoriesMeta.args,
    ...ExampleBuiltinContent.args,
  },
} satisfies Meta<typeof BaseUncontrolledDialog>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
  parameters: {
    controls: {
      exclude: ["handleClose"],
    },
  },
  render: (args) => {
    const ref = React.useRef<BaseUncontrolledDialogRef>(null);
    const handleOpen = React.useCallback(() => ref.current?.handleOpen(), []);

    return (
      <>
        <button onClick={handleOpen}>Open</button>
        <BaseUncontrolledDialog {...args} ref={ref} />
      </>
    );
  },
};
