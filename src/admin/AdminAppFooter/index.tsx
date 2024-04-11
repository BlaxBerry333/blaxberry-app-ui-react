import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Paper, { type PaperProps } from "@mui/material/Paper";
import { SOCIAL_LINKS, type SocialLinkItemType } from "../tools";

export type AdminAppFooterProps = {
  footerProps?: PaperProps;
  showTopDivider?: boolean;
  copyright: string;
  socialLinks: Array<{
    type: SocialLinkItemType;
    link: string;
  }>;
};

const AdminAppFooter: React.FC<AdminAppFooterProps> = ({
  footerProps,
  copyright,
  socialLinks,
  showTopDivider = true,
}) => {
  return (
    <>
      <Divider
        sx={{
          display: showTopDivider ? "block" : "none",
          my: 2,
        }}
      />

      <Paper
        component="footer"
        variant="outlined"
        sx={(theme) => ({
          pt: 2,
          borderRadius: theme.shape.borderRadius,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          pb: 2,
          mt: showTopDivider ? 0 : 2,
        })}
        {...footerProps}
      >
        {/* copyright */}
        <Typography
          variant="caption"
          noWrap
          sx={{ flex: 1, color: "GrayText", textAlign: "center" }}
        >
          {copyright}
        </Typography>

        {/* social links */}
        {socialLinks && (
          <Stack direction="row" spacing={1} sx={{ pl: 2 }}>
            {socialLinks?.map((item) => (
              <IconButton
                key={item.type}
                size="small"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SOCIAL_LINKS[item.type]}
              </IconButton>
            ))}
          </Stack>
        )}
      </Paper>
    </>
  );
};

const AdminAppFooterMemo = React.memo(AdminAppFooter);
export default AdminAppFooterMemo;
