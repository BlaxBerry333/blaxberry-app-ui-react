import * as React from "react";
import { type PaperProps } from "@mui/material/Paper";
import { type SocialLinkItemType } from "../tools";
export type AdminAppFooterProps = {
    footerProps?: PaperProps;
    showTopDivider?: boolean;
    copyright: string;
    socialLinks: Array<{
        type: SocialLinkItemType;
        link: string;
    }>;
};
declare const AdminAppFooterMemo: React.NamedExoticComponent<AdminAppFooterProps>;
export default AdminAppFooterMemo;
