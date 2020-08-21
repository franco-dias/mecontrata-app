import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Typography from '../../components/Typography';
import PhotoUpload from '../../components/PhotoUpload';
import PhotoUploadList from '../../components/PhotoUploadList';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Sandbox = ({ navigation }) => {
  const [photo, setPhoto] = useState({});
  const [value, setValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [photos, setPhotos] = useState([]);
  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', padding: 24 }}>
      <PageHeader navigation={navigation} />
      <Typography variant="subtitle">
        Inputs
      </Typography>
      <Input
        value={value}
        onChangeText={setValue}
        iconName="person"
      />
      <Select
        options={[
          { label: 'Monte Carmelo', value: 'monte-carmelo' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
          { label: 'Uberlândia', value: 'uberlandia' },
        ]}
        value={selectValue}
        onChange={setSelectValue}
        placeholder="Selecione uma cidade"
      />
      <Typography variant="subtitle">
        Uploads
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
    </KeyboardAvoidingView>
  );
};

export default Sandbox;
