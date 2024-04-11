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
        alignItems: "center",
        "& .MuiBreadcrumbs-separator": { mx: 1.5 },
      }}
      {...props}
    >
      {list?.map((item, index) => {
        const isActive = !item.icon || list.length - 1 === index;

        return (
          <Typography
            key={item.id}
            component="div"
            noWrap
            color={isActive ? "text.primary" : "text.inherit"}
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              fontWeight: isActive ? 500 : 400,
            }}
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
