import * as React from "react";
import type { HeaderAccountListProps } from "./HeaderAccountList";
export type HeaderAccountListItemData = {
    id: string;
    text: string;
    icon?: React.ReactNode;
    avatarSrc?: string;
    isActive?: boolean;
    onClick?: () => void;
};
export type HeaderAccountListItemProps = Pick<HeaderAccountListProps, "listItemProps" | "listItemButtonProps" | "listItemIconProps" | "listItemTextProps"> & {
    item: HeaderAccountListItemData;
};
declare const HeaderAccountListItemMemo: React.NamedExoticComponent<HeaderAccountListItemProps>;
export default HeaderAccountListItemMemo;
