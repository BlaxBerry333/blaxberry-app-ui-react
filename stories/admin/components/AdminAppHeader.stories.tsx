import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { AdminAppHeader } from "../../../src/admin";

const meta = {
  title: "admin/components/AdminAppHeader",
  component: AdminAppHeader,
  args: {
    headerBreadcrumbs: {
      list: [
        { id: "home", text: "首页", icon: <HomeOutlinedIcon /> },
        { id: "scenario", text: "流程图", icon: <AccountTreeOutlinedIcon /> },
        { id: "list", text: "列表" },
      ],
    },
    headerActions: {
      toggleTranslation: {
        show: true,
        defaultValue: "en",
        onClick: (language) => {
          console.log("clicked ", language);
        },
        languagesList: [
          {
            id: "en",
            text: "English",
            avatarSrc:
              "https://as2.ftcdn.net/v2/jpg/00/61/47/33/1000_F_61473310_GwaVCFCKeQdeRj05P88xlnO3dF5HiJRp.jpg",
          },
          {
            id: "ja",
            text: "Japanese",
            avatarSrc:
              "https://p1.hiclipart.com/preview/341/890/500/worldcup-flag-balls-32-icons-round-japan-flag.jpg",
          },
          {
            id: "zh",
            text: "Chinese",
            avatarSrc: "https://ks-global.jp/img/cn.png",
          },
        ],
      },
    },
    headAccount: {
      avatarProps: {
        alt: "Account",
        src: "https://avatars.githubusercontent.com/u/73395592?v=4",
      },
      listProps: {
        listSubheader: {
          children: "blaxberry@123.example.com",
        },
        data: [
          {
            id: "edit-account",
            text: "编辑资料",
            icon: <EditNoteRoundedIcon />,
            onClick: () => {},
          },
        ],
        extraData: [
          {
            id: "exit-account",
            text: "退出登陆",
            icon: <ExitToAppRoundedIcon />,
            onClick: () => {
              console.log("exit");
            },
          },
        ],
      },
    },
  },
} satisfies Meta<typeof AdminAppHeader>;

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
      <AdminAppHeader {...args} headSideNav={{ isExpanded, toggleExpand }} />
    );
  },
};
