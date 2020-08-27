import React, { useMemo, memo } from 'react';

import PhotoUpload from '../PhotoUpload';

import { Container, UploadSingle } from './style';

const PhotoUploadList = ({
  size,
  photos,
  setPhotos,
  limit,
}) => {
  const handlePhotoUpload = (photo) => setPhotos((prevState) => ([
    ...prevState,
    photo,
  ]));

  const photoCount = useMemo(() => photos.length, [photos]);

  const handleRemove = (index) => setPhotos((prevState) => {
    const newArray = [...prevState];
    newArray.splice(index, 1);
    return newArray;
  });

  return (
    <Container horizontal>
      {photoCount < limit && (
      <PhotoUpload
        size={size}
        photo={null}
        setPhoto={handlePhotoUpload}
      />
      )}
      {photos.map((photo, index) => (
        <UploadSingle key={index}>
          <PhotoUpload
            size={size}
            photo={photo}
            setPhoto={() => handleRemove(index)}
          />
        </UploadSingle>
      ))}
    </Container>
  );
};

export default memo(PhotoUploadList);
