import React from 'react';
import {
  InputText,
} from './style';

function TextArea({ placeHolder, onChangeText }) {
  return (

    <InputText
      multiline
      style={{
        textAlignVertical: 'top',
      }}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      placeholderTextColor="#333951"
    />

  );
}

export default TextArea;
