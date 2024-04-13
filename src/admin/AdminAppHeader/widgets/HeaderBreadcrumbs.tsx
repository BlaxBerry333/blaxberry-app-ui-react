import * as React from "react";

import Box from "@mui/material/Box";
import Breadcrumbs, { type BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export type HeaderBreadcrumbsProps = {
  props?: BreadcrumbsProps;
  list?: Array<{
    id: string;
    text: string;
    icon?: React.ReactNode;
  }>;
};

const HeaderBreadcrumbs: React.FC<HeaderBreadcrumbsProps> = ({
  list,
  props,
}) => {
  return (
    <Breadcrumbs
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        ml: 2,
        alignItems: "center",
        "& .MuiBreadcrumbs-separator": { mx: 1.5 },
      }}
      {...props}
    >
      {list?.map((item, index) => {
        const isActive = list.length - 1 === index;
        return (
          <Typography
            key={item.id}
            component="div"
            noWrap
            variant="body2"
            sx={(theme) => ({
              display: "flex",
              alignItems: "flex-end",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? theme.palette.primary.main : "text.inherit",
            })}
          >
            {/* icon */}
            {item.icon && (
              <Box
                sx={{ display: "flex", alignItems: "center", mr: 0.5 }}
                color="text.inherit"
              >
                {item.icon}
              </Box>
            )}

            {/* text */}
            {item.text}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

const HeaderBreadcrumbsMemo = React.memo(HeaderBreadcrumbs);
export default HeaderBreadcrumbsMemo;
