import { FC, useState } from "react";
import { InputBase, InputBaseProps } from "../../input-base/ui/input-base";
import { createStyles } from "./input-password.style";
import { SvgEye } from "@shared/assets/icons/components/eye";
import { SvgEyeClosed } from "@shared/assets/icons/components/eye-closed";
import { useThemeObject } from "@shared/themes";

export const InputPassword: FC<InputBaseProps> = ({
  label,
  placeholder,
  control,
  name,
}) => {
  const { styles } = useThemeObject(createStyles);

  const [isHide, setIsHide] = useState(true);

  return (
    <InputBase
      label={label}
      placeholder={placeholder}
      name={name}
      control={control}
      secureTextEntry={isHide}
      style={styles.root}
    >
      {!isHide && (
        <SvgEye
          style={styles.icon}
          onPress={() => setIsHide((prev) => !prev)}
        />
      )}
      {isHide && (
        <SvgEyeClosed
          style={styles.icon}
          onPress={() => setIsHide((prev) => !prev)}
        />
      )}
    </InputBase>
  );
};
