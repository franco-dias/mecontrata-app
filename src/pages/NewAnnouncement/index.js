import React, { useState, useEffect, useMemo } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import withLayout from '../../components/Layout/withLayout';
import Typography from '../../components/Typography';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import PhotoUploadList from '../../components/PhotoUploadList';
import api, { formDataApi } from '../../resources/api';
import capitalizeWords from '../../utils/capitalizeWords';

import {
  Container,
  PageContent,
  TitleWrapper,
  InputSelectWrapper,
  TextAreaWrapper,
  PhotoWrapper,
  PhotoUploadWrapper,
  ButtonWrapper,
} from './style';

const validationSchema = yup.object().shape({
  categoryId: yup.number('Campo obrigatório').required('Campo obrigatório'),
  jobId: yup.number('Campo obrigatório').required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
});

const NewAnnouncement = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);

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
      .then(() => navigation.navigate('Dashboard'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api.get('/category')
      .then((response) => setCategories(response.data));
  }, []);

  const categoryOptions = useMemo(
    () => categories.map((category) => ({
      label: capitalizeWords(category.description),
      value: category.id,
    })),
    [categories],
  );

  const jobOptions = useMemo(
    () => jobs.map((job) => ({ label: job.description, value: job.id })),
  );

  const getJobs = async (id) => {
    if (!id) setJobs([]);
    try {
      const { data } = await api.get(`/category/${id}`);
      setJobs(data.jobs || []);
    } catch (e) {
      console.log(e);
    }
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
          {({
            handleChange,
            setFieldValue,
            handleSubmit,
            values,
            errors,
          }) => (
            <>
              <InputSelectWrapper>
                <Select
                  options={categoryOptions}
                  value={values.categoryId}
                  onChange={(value) => {
                    setFieldValue('categoryId', value);
                    setFieldValue('jobId', -1);
                    getJobs(value);
                  }}
                  error={errors.categoryId}
                  placeholder="Selecione uma categoria"
                />
              </InputSelectWrapper>
              <InputSelectWrapper>
                <Select
                  options={jobOptions}
                  value={values.jobId}
                  error={errors.jobId}
                  onChange={(value) => setFieldValue('jobId', value)}
                  placeholder="Selecione uma profissão"
                />
              </InputSelectWrapper>
              <TextAreaWrapper>
                <TextArea
                  value={values.description}
                  error={errors.description}
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
