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

export const useImagePicker = ({
  setImageURI,
}: {
  setImageURI: React.Dispatch<React.SetStateAction<null>>;
}) => {
  const openGallery = () => {
    launchImageLibrary(OPTIONS, (response) => {
      if (!response.didCancel) {
        setImageURI(response.assets[0].uri);
      }
      console.log(response);
    });
  };

  return {
    openGallery,
  };
};
