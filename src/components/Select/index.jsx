import React, { useState, useMemo, memo } from 'react';
import { Modal, VirtualizedList } from 'react-native';
import PropTypes from 'prop-types';

import Input from '../Input';

import {
  Container,
  Field,
  FieldText,
  Icon,
  Option,
  OptionText,
  OptionsContainer,
  Title,
  Backdrop,
  Error,
  SearchContainer,
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
  const [searchText, setSearchText] = useState('');
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

  const filteredOptions = useMemo(
    () => [
      { label: 'Limpar seleção', value: null },
      ...options.filter((option) => option?.label?.toLowerCase()
        .includes(searchText?.toLowerCase())),
    ],
    [options, searchText],
  );

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
          <SearchContainer>
            <Input
              iconName="search"
              value={searchText}
              onChangeText={setSearchText}
              variant="small"
              placeholder="Pesquisar"
            />
          </SearchContainer>
          <VirtualizedList
            style={{ flex: 1 }}
            data={filteredOptions}
            initialNumToRender={20}
            keyExtractor={(option) => option.value}
            getItem={(data, index) => data[index]}
            getItemCount={() => filteredOptions.length}
            renderItem={({ item }) => (
              <Option
                key={item.value}
                onPress={handleChange(item.value)}
              >
                <OptionText>
                  {item.label}
                </OptionText>
              </Option>
            )}
          />
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
