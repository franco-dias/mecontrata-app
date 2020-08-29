import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Balloon, Row, ImagePhoto, CustomText,
} from './style';
import Icon from '../Icon';
import Typography from '../Typography';

function SpotlightCard({
  name,
  occupation,
  local,
  likes,
  profilePhoto,
  colorBalloon,
  colorTitle,
  colorCustomText,
  colorIcon,
}) {
  return (
    <Balloon
    // eslint-disable-next-line no-use-before-define
      style={styles.shadow}
      color={colorBalloon}
    >
      <Row>
        <ImagePhoto
          source={{ uri: profilePhoto }}
        />
        <Typography variant="subtitle" color={colorTitle}>
          {name}
        </Typography>
      </Row>
      <Row>
        <Icon
          lib="MaterialCommunityDesign"
          iconName="briefcase-outline"
          size={20}
          color={colorIcon}
        />
        <CustomText color={colorCustomText}>
          {occupation}
        </CustomText>
      </Row>
      <Row>
        <Icon
          lib="Ionic"
          iconName="location-outline"
          size={20}
          color={colorIcon}
        />
        <CustomText color={colorCustomText}>
          {local}
        </CustomText>
      </Row>
      <Row>
        <Icon
          lib="AntDesign"
          iconName="like2"
          size={20}
          color={colorIcon}
        />
        <CustomText color={colorCustomText}>
          {likes}
        </CustomText>
      </Row>

    </Balloon>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
});

export default SpotlightCard;
