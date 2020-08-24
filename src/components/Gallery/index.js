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
      <PhotoList horizontal>
        {photos?.map((photo, index) => (
          <Photo
            key={index}
            source={{ uri: photo }}
          />
        ))}
      </PhotoList>
    </Container>
  );
}

Gallery.defaultProps = {
  photos: [],
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default Gallery;
