import * as React from "react";
import { type ListProps } from "@mui/material/List";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type TypographyProps } from "@mui/material/Typography";
import type { HeaderAccountListItemData } from "../../AdminAppHeader/widgets/HeaderAccountListItem";
export type SideNavigationProps = {
    data: Array<HeaderAccountListItemData>;
    listProps?: ListProps;
    listItemButtonProps?: (listItem?: HeaderAccountListItemData) => ListItemButtonProps;
    listItemIconProps?: (listItem?: HeaderAccountListItemData) => ListItemIconProps;
    listItemTextProps?: (listItem?: HeaderAccountListItemData) => TypographyProps;
};
declare const SideNavigationMemo: React.NamedExoticComponent<SideNavigationProps>;
export default SideNavigationMemo;
