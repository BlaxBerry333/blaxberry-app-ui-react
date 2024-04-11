import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { BaseList, BaseListItem } from "../../../src/@common";

const meta = {
  title: "@common/List/BaseList",
  component: BaseList,
  parameters: {
    layout: "centered",
  },
  args: {
    listProps: {
      style: {
        border: "1px solid grey",
        padding: 8,
        width: 200,
      },
    },
    listSubheaderProps: {
      children: "副标题",
    },
  },
} satisfies Meta<typeof BaseList>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
  args: {
    children: "xxxx",
  },
  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
  render: (args) => {
    const handle = React.useMemo(() => {}, []);
    return (
      <BaseList {...args}>
        <BaseListItem
          primaryContent="上山打老虎"
          secondaryContent="老虎没打着"
        />
        <BaseListItem
          primaryContent={
            <>
              <strong>自定义内容</strong>
              <span>自定义内容</span>
              <small>自定义内容</small>
            </>
          }
        />
        <BaseListItem
          primaryContent="点击"
          listItemButtonProps={{
            onClick: (e) => {
              e.stopPropagation();
              console.log("onClick");
            },
          }}
        />
        <BaseListItem
          primaryContent="拖拽"
          listItemButtonProps={{
            disableRipple: true,
            // disableTouchRipple: true,
            style: { cursor: "grab" },
            draggable: true,
            onDragStart: (e) => {
              e.stopPropagation();
              console.log("onDragStart");
            },
            onDragEnd: (e) => {
              e.stopPropagation();
              console.log("onDragEnd");
            },
          }}
        />
      </BaseList>
    );
  },
};
