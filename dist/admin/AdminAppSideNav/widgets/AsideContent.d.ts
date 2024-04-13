/// <reference types="react" />
import { type SideNavigationProps } from "./SideNavigation";
export type AdminAppSideNavContentProps = {
    isExpanded: boolean;
    logo: undefined | {
        url?: string;
        text?: string;
        onClick?: () => void;
    };
    navigation: {
        list: SideNavigationProps["data"];
    };
};
declare const AdminAppSideNavContentMemo: import("react").NamedExoticComponent<AdminAppSideNavContentProps>;
export default AdminAppSideNavContentMemo;
