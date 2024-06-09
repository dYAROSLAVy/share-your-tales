import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const OPTIONS = {
  title: "Select Image",
  mediaType: "photo",
  quality: 1,
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

type UseImagePickerProps = {
  setImage: React.Dispatch<React.SetStateAction<null>>;
  onComplete?: () => void;
};

export const useImagePicker = ({
  setImage,
  onComplete,
}: UseImagePickerProps) => {
  const openGallery = () => {
    launchImageLibrary(OPTIONS, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        setImage(response?.assets?.[0]);
        onComplete?.();
      }
    });
  };

  return {
    openGallery,
  };
};
