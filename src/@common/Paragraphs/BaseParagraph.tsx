import Typography, { type TypographyProps } from "@mui/material/Typography";
import { memo, type FC, type PropsWithChildren } from "react";

export type BaseParagraphProps = PropsWithChildren<TypographyProps>;

const BaseParagraph: FC<BaseParagraphProps> = (props) => {
  return <Typography component="p" {...props} />;
};

const BaseParagraphMemo = memo(BaseParagraph);
export default BaseParagraphMemo;
