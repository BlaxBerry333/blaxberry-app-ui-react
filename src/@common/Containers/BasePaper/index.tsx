import Box, { type BoxProps } from "@mui/material/Box";
import Paper, { type PaperProps } from "@mui/material/Paper";
import React, { type PropsWithChildren } from "react";

export type BasePaperProps = PropsWithChildren<{
  wrapperProps?: BoxProps;
  contentProps?: PaperProps;
}>;

const BasePaper: React.FC<BasePaperProps> = ({
  wrapperProps,
  contentProps,
  children,
}) => {
  return (
    <Box sx={{ p: 1 }} {...wrapperProps}>
      <Paper
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius,
          p: 2,
        })}
        {...contentProps}
      >
        {children}
      </Paper>
    </Box>
  );
};

const BasePaperMemo = React.memo(BasePaper);
export default BasePaperMemo;
