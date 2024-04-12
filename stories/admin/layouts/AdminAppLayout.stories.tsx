import type { StoryObj } from "@storybook/react";
import React from "react";

import { AdminLayout } from "../../../src/admin";
import AdminAppFooterStoryMeta from "../components/AdminAppFooter.stories";
import AdminAppHeaderStoryMeta from "../components/AdminAppHeader.stories";
import AdminAppSideNavStoryMeta from "../components/AdminAppSideNav.stories";

import { BaseButton, BasePaper } from "../../../src/@common";
import "./AdminAppLayout.stories.css";

const meta = {
  title: "admin/layouts/AdminAppLayout",
  tags: [],
};

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",

  render: () => {
    const handle = React.useCallback(() => {}, []);

    return (
      <AdminLayout
        appSideNavProps={AdminAppSideNavStoryMeta.args}
        appHeaderProps={AdminAppHeaderStoryMeta.args}
        appFooterProps={AdminAppFooterStoryMeta.args}
        customThemeOptions={{
          customThemeMode: "dark",
          customThemePaletteOptions: {
            primary: {
              contrastText: "#fff",
              dark: "#3949ab",
              light: "#5c6bc0",
              main: "#3f51b5",
            },
            secondary: {
              contrastText: "",
              dark: "#1e88e5",
              light: "#42a5f5",
              main: "#2196f3",
            },
          },
        }}
      >
        {[...new Array(20)].map((_, i) => (
          <p key={i}>{i} - xxx</p>
        ))}

        <BasePaper>111</BasePaper>
        <BasePaper contentProps={{ style: { width: 100 } }}>222</BasePaper>
        <BasePaper wrapperProps={{ sx: { p: 0 } }}>333</BasePaper>

        <div>
          <BaseButton>ABCDEFG</BaseButton>
          <BaseButton variant="text">xxx</BaseButton>
          <BaseButton variant="contained">xxx</BaseButton>
          <BaseButton color="error">ABCDEFG</BaseButton>
          <BaseButton>?</BaseButton>
          <BaseButton disabled>?</BaseButton>
        </div>
      </AdminLayout>
    );
  },
};
