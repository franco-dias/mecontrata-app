import React, { useState, useMemo } from 'react';
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
} from './style';

const Select = ({
  error,
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const hasError = useMemo(() => Boolean(error), [error]);
  const iconColor = useMemo(() => (hasError ? '#FF0B0B' : '#666'), [hasError]);

  const showValue = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [options, value],
  );

  return (
    <>
      <Container
        hasError={hasError}
        onPress={() => setModalVisible(true)}
      >
        <Field
          onPress={() => setModalVisible(true)}
        >
          <FieldText>
            {value && showValue}
            {!value && 'Selecione'}
          </FieldText>
        </Field>
        <Icon
          lib="MaterialDesign"
          iconName="arrow-drop-down"
          size={24}
          color={iconColor}
        />
      </Container>
      <Modal
        animationType="slide"
        hardwareAccelerated
        onRequestClose={() => setModalVisible(false)}
        presentationStyle="overFullScreen"
        transparent
        visible={modalVisible}
      >
        <Backdrop onPress={() => setModalVisible(false)} />
        <OptionsContainer>
          <Title variant="subtitle">
            {placeholder}
          </Title>
          <OptionsView>
            <Option
              onPress={() => {
                onChange('');
                setModalVisible(false);
              }}
            >
              <OptionText>
                Limpar seleção
              </OptionText>
            </Option>
            {options.map((option) => (
              <Option
                key={option.value}
                onPress={() => {
                  onChange(option.value);
                  setModalVisible(false);
                }}
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
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;