import React, { useState, useRef } from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-simple-toast';

import withLayout from '../../components/Layout/withLayout';
import Typography from '../../components/Typography';

import { formDataApi } from '../../resources/api';
import Form from './Form';

import {
  Container,
  PageContent,
  TitleWrapper,
} from './style';

const validationSchema = yup.object().shape({
  categoryId: yup.number('Campo obrigatório').required('Campo obrigatório').nullable(),
  jobId: yup.number('Campo obrigatório').required('Campo obrigatório').nullable(),
  description: yup.string().required('Campo obrigatório'),
});

const NewAnnouncement = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const formRef = useRef(null);

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
      .then(() => {
        Toast.show('Anúncio cadastrado com sucesso!');
        if (formRef.current) {
          formRef.current.resetForm();
          setPhotos([]);
        }
        navigation.navigate('MyServices');
      });
  };

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
          validationSchema={validationSchema}
          initialValues={{}}
        >
          {(formikProps) => (
            <Form
              {...formikProps}
              photos={photos}
              setPhotos={setPhotos}
              ref={formRef}
            />
          )}
        </Formik>

      </PageContent>
    </Container>
  );
};

export default withLayout(NewAnnouncement);
