import * as React from "react";

import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import type { HeaderAccountListProps } from "./HeaderAccountList";

export type HeaderAccountListItemData = {
  id: string;
  text: string;
  icon?: React.ReactNode;
  avatarSrc?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type HeaderAccountListItemProps = Pick<
  HeaderAccountListProps,
  | "listItemProps"
  | "listItemButtonProps"
  | "listItemIconProps"
  | "listItemTextProps"
> & {
  item: HeaderAccountListItemData;
};

const HeaderAccountListItem: React.FC<HeaderAccountListItemProps> = ({
  item,

  listItemProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <ListItem disablePadding {...listItemProps}>
      <ListItemButton
        selected={item.isActive}
        onClick={item.onClick}
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius,
          py: 1,
        })}
        {...listItemButtonProps}
      >
        {/* icon */}
        {item.icon && (
          <ListItemIcon sx={{ minWidth: 0, mr: 2 }} {...listItemIconProps}>
            {item.icon}
          </ListItemIcon>
        )}
        {item.avatarSrc && (
          <Avatar
            alt={item.id}
            src={item.avatarSrc}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
        )}

        {/* text */}
        <ListItemText
          primaryTypographyProps={{ noWrap: true }}
          {...listItemTextProps}
          primary={item.text}
        />
      </ListItemButton>
    </ListItem>
  );
};

const HeaderAccountListItemMemo = React.memo(HeaderAccountListItem);
export default HeaderAccountListItemMemo;
