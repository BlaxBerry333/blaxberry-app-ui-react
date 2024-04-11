import * as React from "react";
export type ToggleFullScreenButtonProps = {
    show?: boolean;
    onClick?: (isFullScreen: boolean) => void;
};
declare const ToggleFullScreenButtonMemo: React.MemoExoticComponent<({ show, onClick, }: ToggleFullScreenButtonProps) => import("react/jsx-runtime").JSX.Element>;
export default ToggleFullScreenButtonMemo;
