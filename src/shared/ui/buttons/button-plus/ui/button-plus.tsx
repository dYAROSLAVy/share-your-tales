import { SvgPlus } from "@shared/assets/icons/components/plus";
import { getStyles } from "./button-plus.style";
import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../../button-base";

export const ButtonPlus: FC<ButtonBaseProps> = ({ style, ...props }) => {
  const styles = getStyles({ style });
  return (
    <ButtonBase style={styles.rootStyles} {...props}>
      <SvgPlus />
    </ButtonBase>
  );
};
