import GTranslateRoundedIcon from "@mui/icons-material/GTranslateRounded";
import { Popover } from "@mui/material";
import * as React from "react";

import { BaseIconButton } from "@/@common";
import HeaderAccountList from "@/admin/AdminAppHeader/widgets/HeaderAccountList";
import type { HeaderAccountListItemData } from "@/admin/AdminAppHeader/widgets/HeaderAccountListItem";

export type ToggleTranslationButtonProps = {
  show?: boolean;
  languagesList?: Array<HeaderAccountListItemData>;
  defaultValue?: string;
  onClick?: (language: string) => void;
};

const ToggleTranslationButton = ({
  show = true,
  languagesList,
  defaultValue,
  onClick,
}: ToggleTranslationButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);

  const handleOpen = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <BaseIconButton
        variant={open ? "contained" : "outlined"}
        sx={{
          display: show ? "flex" : "none",
          mx: 0.5,
        }}
        onClick={handleOpen}
      >
        <GTranslateRoundedIcon />
      </BaseIconButton>

      <Popover
        sx={{ mt: 2.5, width: 200 }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            elevation: 2,
            sx: (theme) => ({ p: 1, borderRadius: theme.shape.borderRadius }),
          },
        }}
      >
        <HeaderAccountList
          listProps={{ style: { width: 150 } }}
          listItemTextProps={{ primaryTypographyProps: { noWrap: true } }}
          data={languagesList?.map((item) => ({
            ...item,
            isActive: item.id === defaultValue,
            onClick: () => {
              onClick?.(item?.id);
            },
          }))}
        />
      </Popover>
    </>
  );
};

const ToggleTranslationButtonMemo = React.memo(ToggleTranslationButton);
export default ToggleTranslationButtonMemo;
