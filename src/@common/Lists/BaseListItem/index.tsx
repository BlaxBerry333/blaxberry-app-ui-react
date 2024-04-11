import * as React from "react";

import Avatar, { type AvatarProps } from "@mui/material/Avatar";
import ListItem, { type ListItemProps } from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";
import ListItemText, {
  type ListItemTextProps,
} from "@mui/material/ListItemText";

export type BaseListItemProps = {
  iconComponent?: React.ReactNode;
  customIconSrc?: string;
  customIconAlt?: string;
  primaryContent?: React.ReactNode;
  secondaryContent?: React.ReactNode;

  listItemProps?: ListItemProps;
  listItemButtonProps?: ListItemButtonProps;
  listItemIconProps?: ListItemIconProps;
  customIconProps?: AvatarProps;
  listItemTextProps?: ListItemTextProps;
};

const BaseListItem: React.FC<BaseListItemProps> = ({
  iconComponent,
  customIconSrc,
  customIconAlt,
  primaryContent,
  secondaryContent,

  listItemProps,
  listItemButtonProps,
  listItemIconProps,
  customIconProps,
  listItemTextProps,
}) => {
  return (
    <ListItem disablePadding {...listItemProps}>
      <ListItemButton
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius,
          py: 1,
        })}
        {...listItemButtonProps}
      >
        {/* icon */}
        {iconComponent && (
          <ListItemIcon sx={{ minWidth: 0, mr: 2 }} {...listItemIconProps}>
            {iconComponent}
          </ListItemIcon>
        )}
        {customIconSrc && (
          <Avatar
            alt={customIconAlt ?? ""}
            src={customIconSrc}
            sx={{ width: 24, height: 24, mr: 1 }}
            {...customIconProps}
          />
        )}

        {/* content */}
        <ListItemText
          primaryTypographyProps={{ noWrap: true }}
          secondaryTypographyProps={{ noWrap: true }}
          primary={primaryContent}
          secondary={secondaryContent}
          {...listItemTextProps}
        />
      </ListItemButton>
    </ListItem>
  );
};

const BaseListItemMemo = React.memo(BaseListItem);
export default BaseListItemMemo;
