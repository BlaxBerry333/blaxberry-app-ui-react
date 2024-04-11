import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BaseControlledDialog } from "../../../src/@common";

const meta = {
  title: "@common/Dialogs/BaseControlledDialog",
  component: BaseControlledDialog,
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: false,
    disableEscape: false,
    maxWidth: "sm",
    fullMaxWidth: true,
  },
  argTypes: {
    isOpen: {
      description: "是否打开 Dialog",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    handleClose: {
      description: "关闭 Dialog 的函数 ( 击背景会自动关闭 Dialog )",
      table: {
        type: { summary: "() => void" },
      },
    },
    disableEscape: {
      description: "值为`true`时点击背景以及`Esc`按键不会自动关闭 Dialog",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    maxWidth: {
      description: "对话框的最大宽度",
      table: {
        type: { summary: "xs|sm|md|lg|xl|false" },
        defaultValue: { summary: "sm" },
      },
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl", false],
    },
    fullMaxWidth: {
      description: "是否撑满对话框的最大宽度",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    dialog: {
      description: "Dialog 组件的`props`",
      table: {
        type: { summary: "MUI.DialogProps" },
      },
      control: { type: "object" },
    },
    dialogTitle: {
      description: "DialogTitle 组件的`props`",
      table: {
        type: { summary: "MUI.DialogPropsTitle" },
      },
      control: { type: "object" },
    },
    dialogContent: {
      description: "DialogContent 组件的`props`",
      table: {
        type: { summary: "MUI.DialogPropsContent" },
      },
      control: { type: "object" },
    },
    dialogActions: {
      description: "DialogActions 组件的`props`",
      table: {
        type: { summary: "MUI.DialogActionsProps" },
      },
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof BaseControlledDialog>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBuiltinContent: Stroy = {
  name: "内置内容",
  parameters: {
    controls: {
      exclude: ["handleClose"],
    },
  },
  args: {
    dialog: {
      fullScreen: false,
    },
    dialogTitle: {
      children: "标题",
    },
    dialogContent: {
      children: "内容",
    },
    dialogActions: {
      cancel: {
        text: "取消",
        callback: (close) => {
          close();
        },
        props: {
          size: "small",
          color: "error",
        },
      },
      ok: {
        text: "确认",
        callback: (close) => {
          close();
        },
        props: {
          size: "small",
        },
      },
    },
  },

  render: (args) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(meta.args.isOpen);
    const handleClose = React.useCallback(() => setIsOpen(false), []);
    const handleOpen = React.useCallback(() => setIsOpen(true), []);

    React.useEffect(() => setIsOpen(!!args.isOpen), [args.isOpen]);

    return (
      <>
        <button onClick={handleOpen}>Open</button>
        <BaseControlledDialog
          {...args}
          isOpen={isOpen}
          handleClose={handleClose}
        />
      </>
    );
  },
};

export const ExampleCustomContent: Stroy = {
  name: "自定义内容",
  parameters: {
    controls: {
      exclude: [
        "handleClose",
        "dialog",
        "dialogTitle",
        "dialogContent",
        "dialogActions",
      ],
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(meta.args.isOpen);
    const handleClose = React.useCallback(() => setIsOpen(false), []);
    const handleOpen = React.useCallback(() => setIsOpen(true), []);

    React.useEffect(() => setIsOpen(!!args.isOpen), [args.isOpen]);

    return (
      <>
        <button onClick={handleOpen}>Open</button>
        <BaseControlledDialog
          {...args}
          isOpen={isOpen}
          handleClose={handleClose}
        >
          Custom Content
          <button onClick={handleClose}>Close</button>
        </BaseControlledDialog>
      </>
    );
  },
};
