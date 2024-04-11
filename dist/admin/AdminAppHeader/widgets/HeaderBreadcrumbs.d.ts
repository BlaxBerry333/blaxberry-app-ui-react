import * as React from "react";
import { type BreadcrumbsProps } from "@mui/material/Breadcrumbs";
export type HeaderBreadcrumbsProps = {
    props?: BreadcrumbsProps;
    list?: Array<{
        id: string;
        text: string;
        icon?: React.ReactNode;
    }>;
};
declare const HeaderBreadcrumbsMemo: React.NamedExoticComponent<HeaderBreadcrumbsProps>;
export default HeaderBreadcrumbsMemo;
