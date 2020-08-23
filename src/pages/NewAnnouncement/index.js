import React, { useState, useEffect, useMemo } from 'react';
import { Formik } from 'formik';

import withLayout from '../../components/Layout/withLayout';
import Typography from '../../components/Typography';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import PhotoUploadList from '../../components/PhotoUploadList';
import api, { formDataApi } from '../../resources/api';

import {
  Container,
  PageContent,
  TitleWrapper,
  CategoryWrapper,
  ServiceWrapper,
  TextAreaWrapper,
  PhotoWrapper,
  PhotoUploadWrapper,
  ButtonWrapper,
} from './style';

const NewAnnouncement = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const [categories, setCategories] = useState([]);

  const onSubmit = (values) => {
    const formData = new FormData();
    photos.forEach((photo) => {
      formData.append('files', {
        uri: photo.uri,
        type: photo.type,
        name: photo.fileName,
      });
    });

    formData.append('data', JSON.stringify(values));

    formDataApi.post('/ad', formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api.get('/category')
      .then((response) => setCategories(response.data));
  }, []);

  const categoryOptions = useMemo(
    () => categories.map((category) => ({ label: category.description, value: category.id })),
    [categories],
  );

  return (
    <Container>
      <PageContent>
        <TitleWrapper>
          <Typography variant="title">
            Oferecer um serviço
          </Typography>
        </TitleWrapper>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            categoryId: null,
            description: '',
          }}
        >
          {({
            handleChange,
            setFieldValue,
            handleSubmit,
            values,
          }) => (
            <>
              <SelectWrapper>
                <Select
                  options={categoryOptions}
                  value={values.categoryId}
                  onChange={(value) => setFieldValue('categoryId', value)}
                  placeholder="Selecione uma categoria"
                />
              </SelectWrapper>

              <TextAreaWrapper>
                <TextArea
                  value={values.description}
                  placeHolder="Descrição"
                  onChangeText={handleChange('description')}
                />
              </TextAreaWrapper>

              <PhotoWrapper>
                <Typography variant="subtitle">
                  Fotos
                </Typography>
                <Typography variant="text">
                  Envie até 5 fotos do seu trabalho
                </Typography>
              </PhotoWrapper>

              <PhotoUploadWrapper>
                <PhotoUploadList
                  size={128}
                  photos={photos}
                  setPhotos={setPhotos}
                  limit={5}
                />
              </PhotoUploadWrapper>
              <ButtonWrapper>
                <Button
                  label="Anunciar"
                  onPress={handleSubmit}
                />
              </ButtonWrapper>
            </>
          )}
        </Formik>

      </PageContent>
    </Container>
  );
};

export default withLayout(NewAnnouncement);
