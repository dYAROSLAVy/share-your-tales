import { SvgPlus } from "@shared/assets/icons/components/plus";
import { getStyles } from "./button-plus.style";
import { FC, useState } from "react";
import { ButtonBase, ButtonBaseProps } from "../../button-base";
import { useTheme } from "@shared/themes";

export const ButtonPlus: FC<ButtonBaseProps> = ({ style, ...props }) => {
  const { theme } = useTheme();

  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles({ style });

  return (
    <ButtonBase
      style={styles.rootStyles}
      underlayColor={theme.color.plus}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      {...props}
    >
      <SvgPlus
        color={isPressed ? theme.color.plusIcon : theme.color.lightest}
      />
    </ButtonBase>
  );
};
