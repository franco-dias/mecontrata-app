import React, { useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { options } from './util';
import { Container, PreviewImage } from './style';

const PhotoUpload = ({
  photo,
  setPhoto,
  size,
  onlyDelete,
}) => {
  const handleUpload = useCallback(() => {
    if (photo?.uri) {
      return setPhoto({});
    }
    if (onlyDelete) return null;
    return ImagePicker.showImagePicker(options, (response) => {
      if (response.uri && response.data) {
        setPhoto(response);
      }
    });
  }, [photo, onlyDelete, setPhoto]);

  return (
    <Container
      size={size}
      onPress={handleUpload}
    >
      {!photo?.uri && <Icon name="camera-plus-outline" size={size / 4} color="#666" />}
      {photo?.uri && <PreviewImage source={{ uri: photo.uri }} />}
    </Container>
  );
};

export default PhotoUpload;
