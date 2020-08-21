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
        paddingLeft: 24,
      }}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      placeholderTextColor="#333951"
    />

  );
}

export default TextArea;
