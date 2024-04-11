import { memo, type PropsWithChildren, type ReactNode } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails, {
  type AccordionDetailsProps,
} from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export type BaseAccordionProps = PropsWithChildren<{
  title?: ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
  reverseExpandIcon?: boolean;
  expandIcon?: ReactNode;
  actions?: ReactNode;

  accordionDetailsProps?: AccordionDetailsProps;
}>;

const BaseAccordion: React.FC<BaseAccordionProps> = ({
  title,
  children,
  actions,
  defaultExpanded = false,
  disabled = false,
  expandIcon = <ExpandMoreIcon />,
  reverseExpandIcon = false,

  accordionDetailsProps,
}) => {
  return (
    <MuiAccordion
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      {/* title */}
      <AccordionSummary
        expandIcon={expandIcon}
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",

          ...{
            ...(reverseExpandIcon
              ? {
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(180deg)",
                  },
                  "& .MuiAccordionSummary-content": {
                    marginLeft: theme.spacing(1),
                  },
                }
              : {}),
          },
        })}
      >
        {title}
      </AccordionSummary>

      {/* content */}
      <AccordionDetails
        sx={{
          borderTop: "1px solid rgba(0, 0, 0, .125)",
          py: 1,
          px: 2,
        }}
        {...accordionDetailsProps}
      >
        {children}
      </AccordionDetails>

      {/* actions */}
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </MuiAccordion>
  );
};

const BaseAccordionMemo = memo(BaseAccordion);
export default BaseAccordionMemo;
