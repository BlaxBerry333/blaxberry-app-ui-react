import { type PropsWithChildren, type ReactNode } from "react";
import { type AccordionDetailsProps } from "@mui/material/AccordionDetails";
export type BaseAccordionProps = PropsWithChildren<{
    title?: ReactNode;
    defaultExpanded?: boolean;
    disabled?: boolean;
    reverseExpandIcon?: boolean;
    expandIcon?: ReactNode;
    actions?: ReactNode;
    accordionDetailsProps?: AccordionDetailsProps;
}>;
declare const BaseAccordionMemo: import("react").NamedExoticComponent<BaseAccordionProps>;
export default BaseAccordionMemo;
