import Grid, { type GridProps } from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { type PropsWithChildren } from "react";

export type BaseGridProps = {
  data: Array<BaseGridItem>;
  gridContainerProps?: Omit<GridProps, "container" | "item" | "spacing">;
  commonGridItemProps?: Omit<GridProps, "container" | "item" | "spacing">;
};

export type BaseGridItem = PropsWithChildren<{
  id: string;
  gridItemProps?: Omit<GridProps, "container" | "item" | "spacing">;
}>;

const BaseGrid: React.FC<BaseGridProps> = ({
  data,
  gridContainerProps,
  commonGridItemProps,
}) => {
  return (
    <Grid container spacing={0} {...gridContainerProps}>
      {data.map((item) => (
        <Grid
          key={item.id}
          item
          zeroMinWidth
          {...commonGridItemProps}
          {...item.gridItemProps}
          style={{
            ...commonGridItemProps?.style,
            ...item.gridItemProps?.style,
          }}
        >
          <Typography component="div" noWrap>
            {item.children}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const BaseGridMemo = React.memo(BaseGrid);
export default BaseGridMemo;
