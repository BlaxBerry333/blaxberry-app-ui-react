import { type AvatarProps } from "@mui/material/Avatar";
import { type PopoverProps } from "@mui/material/Popover";
import * as React from "react";
import type { HeaderAccountListProps } from "./HeaderAccountList";
export type HeaderAccountProps = {
    avatarProps?: AvatarProps;
    popoverProps?: PopoverProps;
    listProps?: HeaderAccountListProps;
};
declare const HeaderAccountMemo: React.NamedExoticComponent<HeaderAccountProps>;
export default HeaderAccountMemo;
