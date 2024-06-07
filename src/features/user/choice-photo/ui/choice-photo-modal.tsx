import { useThemeObject } from "@shared/themes";
import { ButtonPrimary } from "@shared/ui/buttons";
import { BaseModal, BaseModalProps } from "@shared/ui/modal";
import { FC } from "react";
import { View } from "react-native";
import { createStyles } from "./choice-photo-modal.styles";

type ChoicePhotoModalProps = {
  isDeleteButton?: boolean;
  launchImageLibrary: () => void;
} & BaseModalProps;

export const ChoicePhotoModal: FC<ChoicePhotoModalProps> = ({
  isDeleteButton,
  launchImageLibrary,
  setModalVisible,
  ...props
}) => {
  const styles = useThemeObject(createStyles);

  const onGalleryClick = () => {
    launchImageLibrary();
    // setModalVisible(false);
  };

  return (
    <BaseModal {...props}>
      <View>
        <ButtonPrimary text="Take a photo" isMedium />
        <ButtonPrimary
          text="Choose from the library"
          isMedium
          onPress={() => onGalleryClick()}
        />
        {isDeleteButton && <ButtonPrimary text="Delete photo" isMedium />}
      </View>
      <ButtonPrimary
        text="Cancel"
        isMedium
        onPress={() => setModalVisible(false)}
      />
    </BaseModal>
  );
};
