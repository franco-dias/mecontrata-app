import React, { useState } from 'react';

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

import withLayout from '../../components/Layout/withLayout';
import Typography from '../../components/Typography';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import PhotoUploadList from '../../components/PhotoUploadList';

const NewAnnouncement = ({ navigation }) => {
  const [selectValue, setSelectValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [text, setText] = useState('');

  return (
    <Container>
      <PageContent>
        <TitleWrapper>
          <Typography variant="title">
            Oferecer um serviço
          </Typography>
        </TitleWrapper>

        <CategoryWrapper>
          <Select
            options={[
              { label: 'Comercio', value: 'Comercio' },
              { label: 'Cívil', value: 'civil' },
            ]}
            value={selectValue}
            onChange={setSelectValue}
            placeholder="Categoria"
          />

        </CategoryWrapper>

        <ServiceWrapper>
          <Select
            options={[
              { label: 'Bebidas', value: 'bebidas' },
              { label: 'Restaurante', value: 'restaurante' },
            ]}
            value={selectValue}
            onChange={setSelectValue}
            placeholder="Serviço"
          />
        </ServiceWrapper>

        <TextAreaWrapper>
          <TextArea placeHolder="Descrição" onChangeText={setText} />
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
            value={text}
          />
        </ButtonWrapper>

      </PageContent>
    </Container>
  );
};

export default withLayout(NewAnnouncement);
