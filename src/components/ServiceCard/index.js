import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Card,
  CategoryColor,
  ProfilePhoto,
  TextProfile,
} from './style';
import Icon from '../Icon';

const styles = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  texts: {
    flexGrow: 1,
    width: '60%',
    justifyContent: 'center',
  },
  icon: {
    padding: 15,
  },
});

function ServiceCard({
  color,
  url,
  name,
  occupation,
  trash,
  onTrashClick,
  ...props
}) {
  return (
    <Card style={styles.shadow} {...props}>
      <CategoryColor color={color} />
      <ProfilePhoto
        source={{ uri: url }}
      />
      <View style={styles.texts}>
        {name && (
          <TextProfile family="InterSemiBold" size={18}>
            { name }
          </TextProfile>
        )}
        <TextProfile family="InterRegular">
          { occupation }
        </TextProfile>
      </View>
      {trash && (
        <TouchableOpacity style={styles.icon} onPress={onTrashClick}>
          <Icon
            lib="Feather"
            iconName="trash"
            size={20}
            color="#DADADA"
          />
        </TouchableOpacity>
      )}
    </Card>
  );
}

ServiceCard.defaultProps = {
  trash: false,
  onTrashClick: () => {},
  name: null,
};

ServiceCard.propTypes = {
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  occupation: PropTypes.string.isRequired,
  trash: PropTypes.bool,
  onTrashClick: PropTypes.func,
};

export default ServiceCard;
