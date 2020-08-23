import React from 'react';

import PropTypes from 'prop-types';
import Typography from '../Typography';
import {
  Container,
  PhotoList,
  Photo,
} from './style';

function Gallery({ photos }) {
  return (
    <Container>
      <Typography variant="subtitle">
        Galeria
      </Typography>

      <PhotoList horizontal>
        {photos.map((photo, index) => (
          <Photo
            key={index}
            source={{ uri: photo }}
          />
        ))}
      </PhotoList>
    </Container>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Gallery;
