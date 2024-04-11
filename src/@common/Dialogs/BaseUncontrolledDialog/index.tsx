import * as React from "react";

import BaseControlledDialog, {
  type BaseControlledDialogProps,
} from "../BaseControlledDialog";

type DialogIsOpen = BaseControlledDialogProps["isOpen"];

export type BaseUncontrolledDialogRef = {
  isOpen: DialogIsOpen;
  setIsOpen: React.Dispatch<React.SetStateAction<DialogIsOpen>>;
  handleOpen: () => void;
  handleClose: () => void;
};

export type BaseUncontrolledDialogProps = Omit<
  BaseControlledDialogProps,
  "isOpen" | "handleClose"
>;

const BaseUncontrolledDialog: React.ForwardRefRenderFunction<
  BaseUncontrolledDialogRef,
  BaseUncontrolledDialogProps
> = (props, ref) => {
  const [isOpen, setIsOpen] = React.useState<DialogIsOpen>(false);
  const handleOpen = React.useCallback(() => setIsOpen(true), []);
  const handleClose = React.useCallback(() => setIsOpen(false), []);

  React.useImperativeHandle(
    ref,
    () => ({
      isOpen,
      setIsOpen,
      handleOpen,
      handleClose,
    }),
    [isOpen, setIsOpen, handleOpen, handleClose],
  );

  return (
    <BaseControlledDialog
      {...props}
      isOpen={isOpen}
      handleClose={handleClose}
    />
  );
};

const BaseUncontrolledDialogMemo = React.memo(
  React.forwardRef(BaseUncontrolledDialog),
);
export default BaseUncontrolledDialogMemo;
