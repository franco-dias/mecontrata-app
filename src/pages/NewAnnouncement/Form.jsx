import React, {
  useState,
  useEffect,
  useMemo,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';

import Typography from '../../components/Typography';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import PhotoUploadList from '../../components/PhotoUploadList';

import {
  InputSelectWrapper,
  TextAreaWrapper,
  PhotoWrapper,
  PhotoUploadWrapper,
  ButtonWrapper,
} from './style';
import api from '../../resources/api';
import capitalizeWords from '../../utils/capitalizeWords';

const Form = ({
  errors,
  values,
  handleSubmit,
  setFieldTouched,
  setFieldValue,
  resetForm,
  touched,
  photos,
  setPhotos,
}, ref) => {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);

  useImperativeHandle(ref, () => ({
    resetForm,
    setFieldValue,
  }));

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
    <>
      <InputSelectWrapper>
        <Select
          options={categoryOptions}
          value={values.categoryId}
          error={errors.categoryId}
          touched={touched.categoryId}
          onChange={(value) => {
            setFieldValue('categoryId', value);
            setFieldValue('jobId', null);
            getJobs(value);
          }}
          onBlur={() => setFieldTouched('categoryId')}
          placeholder="Selecione uma categoria"
        />
      </InputSelectWrapper>
      <InputSelectWrapper>
        <Select
          options={jobOptions}
          value={values.jobId}
          error={errors.jobId}
          touched={touched.jobId}
          onChange={(value) => setFieldValue('jobId', value)}
          placeholder="Selecione uma profissão"
          onBlur={() => setFieldTouched('jobId')}
        />
      </InputSelectWrapper>
      <TextAreaWrapper>
        <TextArea
          value={values.description}
          error={errors.description}
          placeHolder="Descrição"
          onChangeText={(value) => setFieldValue('description', value)}
          onBlur={() => setFieldTouched('description')}
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
  );
};

export default forwardRef(Form);
