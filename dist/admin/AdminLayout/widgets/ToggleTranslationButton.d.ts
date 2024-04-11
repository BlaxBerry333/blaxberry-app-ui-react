import * as React from "react";
import type { HeaderAccountListItemData } from "@/admin/AdminAppHeader/widgets/HeaderAccountListItem";
export type ToggleTranslationButtonProps = {
    show?: boolean;
    languagesList?: Array<HeaderAccountListItemData>;
    defaultValue?: string;
    onClick?: (language: string) => void;
};
declare const ToggleTranslationButtonMemo: React.MemoExoticComponent<({ show, languagesList, defaultValue, onClick, }: ToggleTranslationButtonProps) => import("react/jsx-runtime").JSX.Element>;
export default ToggleTranslationButtonMemo;
