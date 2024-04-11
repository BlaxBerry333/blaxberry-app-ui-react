import * as React from "react";

import Divider from "@mui/material/Divider";
import List, { type ListProps } from "@mui/material/List";
import { type ListItemProps } from "@mui/material/ListItem";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type ListItemTextProps } from "@mui/material/ListItemText";
import ListSubheader, {
  type ListSubheaderProps,
} from "@mui/material/ListSubheader";

import Typography from "@mui/material/Typography";
import HeaderAccountListItem, {
  type HeaderAccountListItemData,
} from "./HeaderAccountListItem";

export type HeaderAccountListProps = {
  data?: Array<HeaderAccountListItemData>;
  extraData?: Array<HeaderAccountListItemData>;

  listProps?: ListProps;
  listSubheader?: ListSubheaderProps;
  listItemProps?: ListItemProps;
  listItemButtonProps?: ListItemButtonProps;
  listItemIconProps?: ListItemIconProps;
  listItemTextProps?: ListItemTextProps;
};

const HeaderAccountList: React.FC<HeaderAccountListProps> = ({
  data,
  extraData,
  listProps,
  listSubheader,
  listItemProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <List
      dense
      sx={(theme) => ({
        borderRadius: theme.shape.borderRadius,
        py: 0,
      })}
      {...listProps}
      subheader={
        listSubheader ? (
          <ListSubheader
            component="div"
            {...listSubheader}
            sx={(theme) => ({
              lineHeight: 1,
              textAlign: "center",
              borderRadius: theme.shape.borderRadius,
              py: 0.25,
              px: 0.95,
              mb: 0.5,
            })}
            children={
              <Typography variant="subtitle2" noWrap>
                {listSubheader.children}
              </Typography>
            }
          />
        ) : undefined
      }
    >
      {data?.map((item) => (
        <HeaderAccountListItem
          key={item.id}
          {...{
            item,
            listItemProps,
            listItemButtonProps,
            listItemIconProps,
            listItemTextProps,
          }}
        />
      ))}

      {extraData && (
        <>
          <Divider sx={{ my: 1 }} />

          {extraData?.map((item) => (
            <HeaderAccountListItem
              key={item.id}
              {...{
                item,
                listItemProps,
                listItemButtonProps,
                listItemIconProps,
                listItemTextProps,
              }}
            />
          ))}
        </>
      )}
    </List>
  );
};

const HeaderAccountListMemo = React.memo(HeaderAccountList);
export default HeaderAccountListMemo;
