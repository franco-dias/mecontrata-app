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
    <KeyboardAvoidingView style={{
      flex: 1,
      paddingTop: 72,
      paddingBottom: 16,
      paddingHorizontal: 24,
    }}
    >
      <PageHeader navigation={navigation} />
      <Typography variant="title">
        Pesquisar
      </Typography>
      <Input
        value={value}
        onChangeText={setValue}
        iconName="search"
        placeholder="Digite para pesquisar"
      />
    </KeyboardAvoidingView>
  );
};

export default Sandbox;
