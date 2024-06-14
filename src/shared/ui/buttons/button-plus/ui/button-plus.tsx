import { SvgPlus } from "@shared/assets/icons/components/plus";
import { getStyles } from "./button-plus.style";
import { FC } from "react";
import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { useTheme } from "@shared/themes";

export const ButtonPlus: FC<ButtonBaseProps> = ({ style, ...props }) => {
  const styles = getStyles({ style });
  const { theme } = useTheme();
  return (
    <ButtonBase style={styles.rootStyles} {...props}>
      <SvgPlus color={theme.color.lightest} />
    </ButtonBase>
  );
};
