import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BaseAccordion } from "../../../src/@common";

const meta = {
  title: "@common/Accordions/BaseAccordion",
  component: BaseAccordion,
  argTypes: {
    title: {
      description: "文本标题",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      description: "自定义展开内容",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    defaultExpanded: {
      description: "是否默认展开",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "是否禁止展开",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    reverseExpandIcon: {
      description: "是否反转扩展图标的位置 ( 改为居左侧显示 )",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    expandIcon: {
      description: "自定义扩展图标",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "<ExpandMoreIcon />" },
      },
    },
    actions: {
      description: "自定义展开内容右下角的扩展内容",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  args: {
    title: "title",
    children: "xxxxx",
    defaultExpanded: false,
    disabled: false,
    reverseExpandIcon: false,
    expandIcon: undefined,
    actions: undefined,
  },
} satisfies Meta<typeof BaseAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleBase: Story = {
  name: "基本使用",
};

export const ExampleMore: Story = {
  name: "更多例子",
  parameters: { controls: { include: [""] } },

  render: (args) => {
    const list = React.useMemo(() => [], []);
    return (
      <>
        <h3>defaultExpanded=true</h3>
        <BaseAccordion title="Title" defaultExpanded>
          xxx
        </BaseAccordion>
        <br />

        <h3>disabled=true</h3>
        <BaseAccordion title="Title" disabled>
          xxx
        </BaseAccordion>
        <br />

        <h3>reverseExpandIcon=true</h3>
        <BaseAccordion title="Title" reverseExpandIcon>
          xxx
        </BaseAccordion>
        <br />

        <h3>expandIcon="A"</h3>
        <BaseAccordion title="Title" expandIcon={"A"}>
          xxx
        </BaseAccordion>
        <br />

        <h3>actions=components</h3>
        <BaseAccordion
          title="Title"
          expandIcon={"A"}
          actions={
            <>
              <button>AA</button>
              <button>BB</button>
            </>
          }
        >
          xxx
        </BaseAccordion>
      </>
    );
  },
};
