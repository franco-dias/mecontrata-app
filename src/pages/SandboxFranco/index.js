import React, { useState } from 'react';

import { View } from 'react-native';
import Typography from '../../components/Typography';
import PhotoUpload from '../../components/PhotoUpload';
import PhotoUploadList from '../../components/PhotoUploadList';
import Icon from '../../components/Icon';

const Sandbox = () => {
  const [photo, setPhoto] = useState({});
  const [photos, setPhotos] = useState([]);
  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 24 }}>
      <Typography variant="subtitle">
        Sandbox
      </Typography>
      <PhotoUpload
        size={256}
        photo={photo}
        setPhoto={setPhoto}
      />
      <PhotoUploadList
        size={128}
        photos={photos}
        setPhotos={setPhotos}
        limit={5}
      />

      <Icon
        lib="Ionic"
        iconName="american-football"
        size={40}
        color="#000"
      />
    </View>
  );
};

export default Sandbox;
