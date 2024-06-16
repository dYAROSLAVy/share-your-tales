import { ImageModel } from "@shared/utils/model/types";
import {
  Asset,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";

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
  setImage: React.Dispatch<React.SetStateAction<Asset | null | ImageModel>>;
  setImageUrl?: React.Dispatch<React.SetStateAction<string | undefined | null>>;
  onComplete?: () => void;
};

export const useImagePicker = ({
  setImage,
  setImageUrl,
  onComplete,
}: UseImagePickerProps) => {
  const openGallery = () => {
    launchImageLibrary(OPTIONS as ImageLibraryOptions, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        if (response.assets?.length) {
          setImage(response.assets[0]);
          setImageUrl?.(response?.assets?.[0].uri);
          onComplete?.();
        }
      }
    });
  };

  const openCamera = () => {
    launchCamera(OPTIONS as ImageLibraryOptions, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        if (response?.assets) {
          setImage(response?.assets?.[0]);
          setImageUrl?.(response?.assets?.[0].uri);
          onComplete?.();
        }
      }
    });
  };

  return {
    openGallery,
    openCamera,
  };
};
