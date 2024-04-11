import List, { type ListProps } from "@mui/material/List";
import ListSubheader, {
  type ListSubheaderProps,
} from "@mui/material/ListSubheader";
import * as React from "react";

export type BaseListProps = React.PropsWithChildren<{
  listProps?: ListProps;
  listSubheaderProps?: ListSubheaderProps;
}>;

const BaseList: React.FC<BaseListProps> = ({
  children,
  listProps,
  listSubheaderProps,
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
        listSubheaderProps ? (
          <ListSubheader
            component="div"
            {...listSubheaderProps}
            sx={{ lineHeight: 1, p: 1, mb: 0.5, ...listSubheaderProps?.sx }}
          />
        ) : undefined
      }
    >
      {children}
    </List>
  );
};

const BaseListMemo = React.memo(BaseList);
export default BaseListMemo;
