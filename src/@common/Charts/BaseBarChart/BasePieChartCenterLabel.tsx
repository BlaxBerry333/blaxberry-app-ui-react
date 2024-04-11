import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
import React, { type PropsWithChildren } from "react";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
}));

const BasePieChartCenterLabel: React.FC<PropsWithChildren> = ({ children }) => {
  const { width, height, left, top } = useDrawingArea();

  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
};

const BasePieChartCenterLabelMemo = React.memo(BasePieChartCenterLabel);
export default BasePieChartCenterLabelMemo;
