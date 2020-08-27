import React, { useState, useMemo, memo } from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Field,
  FieldText,
  Icon,
  OptionsView,
  Option,
  OptionText,
  OptionsContainer,
  Title,
  Backdrop,
  Error,
} from './style';

const Select = ({
  error,
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  touched,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const hasError = useMemo(() => Boolean(error) && touched, [error, touched]);
  const iconColor = useMemo(() => (hasError ? '#FF0B0B' : '#666'), [hasError]);

  const showValue = useMemo(
    () => options?.find((option) => option.value === value)?.label,
    [options, value],
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    if (onBlur) {
      onBlur();
    }
  };

  const handleChange = (option) => () => {
    onChange(option);
    closeModal();
  };

  return (
    <>
      <Container
        hasError={hasError}
        onPress={openModal}
      >
        <Field
          onPress={openModal}
        >
          <FieldText>
            {value && showValue}
            {!value && placeholder}
          </FieldText>
        </Field>
        <Icon
          lib="MaterialDesign"
          iconName="arrow-drop-down"
          size={24}
          color={iconColor}
        />
      </Container>
      {hasError && <Error>{error}</Error>}
      <Modal
        animationType="slide"
        hardwareAccelerated
        onRequestClose={closeModal}
        presentationStyle="overFullScreen"
        transparent
        visible={modalVisible}
      >
        <Backdrop onPress={closeModal} />
        <OptionsContainer>
          <Title variant="subtitle">
            {placeholder}
          </Title>
          <OptionsView>
            <Option
              onPress={handleChange('')}
            >
              <OptionText small>
                Limpar seleção
              </OptionText>
            </Option>
            {options?.map((option) => (
              <Option
                key={option.value}
                onPress={handleChange(option.value)}
              >
                <OptionText>
                  {option.label}
                </OptionText>
              </Option>
            ))}
          </OptionsView>
        </OptionsContainer>
      </Modal>
    </>
  );
};

Select.defaultProps = {
  value: '',
  onChange: () => {},
  error: '',
  placeholder: '',
  options: [],
};

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
};

export default memo(Select);
