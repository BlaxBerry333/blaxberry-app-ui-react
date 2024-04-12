import Box from "@mui/material/Box";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  type PaletteOptions,
} from "@mui/material/styles";
import * as React from "react";

import AdminAppContent from "../AdminAppContent";
import AdminAppFooter, { type AdminAppFooterProps } from "../AdminAppFooter";
import AdminAppHeader, { type AdminAppHeaderProps } from "../AdminAppHeader";
import AdminAppSideNav, { type AdminAppSideNavProps } from "../AdminAppSideNav";
import {
  ThemePaletteContext,
  type ThemeMode,
} from "./context/ThemePaletteContext";
import {
  RefetchPageContentDataButton,
  ToggleFullScreenButton,
  ToggleThemeModeButton,
  ToggleTranslationButton,
} from "./widgets";

export type AdminLayoutProps = React.PropsWithChildren<{
  appSideNavProps: Omit<AdminAppSideNavProps, "isExpanded">;
  appHeaderProps: AdminAppHeaderProps;
  appFooterProps: AdminAppFooterProps;
  customThemeOptions: {
    customThemeMode: ThemeMode;
    customThemePaletteOptions?: PaletteOptions;
  };
}>;

const AdminLayout: React.FC<AdminLayoutProps> = ({
  appSideNavProps,
  appHeaderProps,
  appFooterProps,
  children,
  customThemeOptions: { customThemeMode = "light", customThemePaletteOptions },
}) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const toggleExpand = React.useCallback(() => {
    React.startTransition(() => setIsExpanded((s) => !s));
  }, []);

  const [themeMode, setThemeMode] = React.useState<ThemeMode>(customThemeMode);
  const toggleThemeMode = React.useCallback(() => {
    setThemeMode((themeMode) => (themeMode === "light" ? "dark" : "light"));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode: themeMode, ...customThemePaletteOptions },
      }),
    [themeMode, customThemePaletteOptions],
  );

  // React.useEffect(() => {
  //   const body = document.body;
  //   if (themeMode === "dark") {
  //     body.style.backgroundColor = "#121212";
  //     body.style.color = "rgba(255, 255, 255, 0.7)";
  //     body.style.transition = "color 295ms , background-color 295ms";
  //   } else {
  //     body.style.backgroundColor = "#fff";
  //     body.style.color = "rgba(0, 0, 0, 0.87)";
  //     body.style.transition = "color 295ms , background-color 295ms";
  //   }
  // }, [themeMode]);

  return (
    <ThemePaletteContext.Provider
      value={{
        toggleThemeMode,
        setThemeMode,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            pt: 2,
            px: 2,
            backgroundColor: "background.paper",
            color: "text.secondary",
            transition: theme.transitions.create("all", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <AdminAppSideNav {...appSideNavProps} isExpanded={isExpanded} />

          <AdminAppContent
            contentProps={{
              sx: { flex: 1, pl: 2 },
            }}
            headerComponent={
              <AdminAppHeader
                {...appHeaderProps}
                headSideNav={{
                  isExpanded,
                  toggleExpand,
                  ...appHeaderProps?.headSideNav,
                }}
                children={
                  <>
                    {/* 1. refresh page content data */}
                    <RefetchPageContentDataButton
                      {...appHeaderProps?.headerActions?.refetchPageContentData}
                    />
                    {/* 2. toggle translation */}
                    <ToggleTranslationButton
                      {...appHeaderProps?.headerActions?.toggleTranslation}
                    />
                    {/* 3. switch theme mode */}
                    <ToggleThemeModeButton />

                    {/* 4. toggle full screen */}
                    <ToggleFullScreenButton
                      {...appHeaderProps?.headerActions?.toggleFullScreen}
                    />
                  </>
                }
              />
            }
          >
            {children}

            <AdminAppFooter {...appFooterProps} />
          </AdminAppContent>
        </Box>
      </MuiThemeProvider>
    </ThemePaletteContext.Provider>
  );
};

const AdminLayoutMemo = React.memo(AdminLayout);
export default AdminLayoutMemo;
