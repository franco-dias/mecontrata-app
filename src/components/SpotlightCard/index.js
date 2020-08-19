import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Balloon, Row, ImagePhoto, IconFromIonic, IconFromAnt, IconFromMaterial,
} from './style';
import Typography from '../Typography';

function SpotlightCard({
  name, occupation, local, likes,
}) {
  return (
    <Balloon>
      <Row>
        <ImagePhoto
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <Typography variant="subtitle">
          {name}
        </Typography>
      </Row>
      <Row>
        <IconFromMaterial style={{ marginRight: 10 }} name="briefcase-outline" size={20} />
        <Typography variant="text">
          {occupation}
        </Typography>
      </Row>
      <Row>
        <IconFromIonic style={{ marginRight: 10 }} name="location-outline" size={20} />
        <Typography variant="text">
          {local}
        </Typography>
      </Row>
      <Row>
        <IconFromAnt style={{ marginRight: 10 }} name="like2" size={20} />
        <Typography variant="text">
          {likes}
        </Typography>
      </Row>

    </Balloon>
  );
}

export default SpotlightCard;
