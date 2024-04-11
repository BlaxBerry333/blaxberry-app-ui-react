import type { Meta, StoryObj } from "@storybook/react";

import { AdminAppFooter } from "../../../src/admin";

const meta = {
  title: "admin/components/AdminAppFooter",
  component: AdminAppFooter,
  args: {
    copyright: "©2024 BlaxBerry All Rights Reserved",
    showTopDivider: true,
    socialLinks: [
      {
        type: "github",
        link: "https://github.com/BlaxBerry333/blaxberry-app-ui-react",
      },
      { type: "facebook", link: "https://www.facebook.com/" },
      { type: "x", link: "https://twitter.com/home" },
    ],
  },
} satisfies Meta<typeof AdminAppFooter>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",
};
