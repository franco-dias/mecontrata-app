import React, { memo } from 'react';
import {
  TextInput,
} from './style';

function TextArea({ placeHolder, onChangeText, ...props }) {
  return (
    <TextInput
      multiline
      style={{
        textAlignVertical: 'top',
        paddingLeft: 24,
      }}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      placeholderTextColor="#333951"
      {...props}
    />
  );
}

export default memo(TextArea);
