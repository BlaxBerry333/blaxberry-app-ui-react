import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { AdminAppSideNav } from "../../../src/admin";

const meta = {
  title: "admin/components/AdminAppSideNav",
  component: AdminAppSideNav,
  args: {
    isExpanded: true,
    logo: {
      url: "https://myapp-admin.vercel.app/favicon.svg",
      text: "My Admin",
      onClick: () => {
        console.log("logo");
      },
    },
    navigation: {
      list: [
        {
          id: "1",
          text: "11",
          icon: <GridViewOutlinedIcon />,
          isActive: false,
          onClick: () => {
            console.log(111);
          },
        },
        {
          id: "2",
          text: "上山打老虎",
          icon: <FormatListBulletedRoundedIcon />,
          isActive: false,
          onClick: () => {},
        },
        {
          id: "3",
          text: "33",
          icon: <AccountTreeOutlinedIcon />,
          isActive: true,
          onClick: () => {},
        },
        {
          id: "4",
          text: "44",
          icon: <SettingsOutlinedIcon />,
          isActive: false,
          onClick: () => {},
        },
      ],
    },
  },
} satisfies Meta<typeof AdminAppSideNav>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",

  render: (args) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    const toggleExpand = React.useCallback(() => {
      setIsExpanded((s) => !s);
    }, []);

    return (
      <div style={{ display: "flex" }}>
        <AdminAppSideNav {...args} isExpanded={isExpanded} />
        <div>
          <button onClick={toggleExpand}>Toggle</button>
          <p>{isExpanded ? "large width" : "small width"}</p>
        </div>
      </div>
    );
  },
};
