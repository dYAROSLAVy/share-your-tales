import { useThemeObject } from "@shared/themes";
import { ButtonPrimary } from "@shared/ui/buttons";
import { BaseModal, BaseModalProps } from "@shared/ui/modal";
import { FC } from "react";
import { View } from "react-native";
import { createStyles } from "./choice-photo-modal.styles";

type ChoicePhotoModalProps = {
  isDeleteButton?: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setImage?: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  launchImageLibrary: () => void;
  launchCamera: () => void;
} & BaseModalProps;

export const ChoicePhotoModal: FC<ChoicePhotoModalProps> = ({
  isDeleteButton,
  launchImageLibrary,
  setModalVisible,
  launchCamera,
  setImage,
  ...props
}) => {
  const styles = useThemeObject(createStyles);

  const onGalleryClick = () => {
    launchImageLibrary();
  };

  const onCameraClick = () => {
    launchCamera();
  };

  return (
    <BaseModal {...props}>
      <View>
        <ButtonPrimary
          style={styles.top}
          text="Take a photo"
          isMedium
          onPress={() => onCameraClick()}
        />
        <ButtonPrimary
          style={!isDeleteButton ? styles.bottom : styles.middle}
          text="Choose from the library"
          isMedium
          onPress={() => onGalleryClick()}
        />
        {isDeleteButton && (
          <ButtonPrimary
            style={styles.bottom}
            text="Delete photo"
            isMedium
            isDelete
            onPress={setImage ? () => setImage(null) : undefined}
          />
        )}
      </View>
      <ButtonPrimary
        style={styles.cancel}
        text="Cancel"
        isMedium
        onPress={() => setModalVisible(false)}
      />
    </BaseModal>
  );
};
