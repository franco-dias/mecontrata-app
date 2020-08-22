import React, { useState } from 'react';

import Typography from '../../components/Typography';
import withLayout from '../../components/Layout/withLayout';
import Input from '../../components/Input';

const Sandbox = ({ navigation }) => {
  const [value, setValue] = useState('');
  return (
    <>
      <Typography variant="title">
        Pesquisar
      </Typography>
      <Input
        value={value}
        onChangeText={setValue}
        iconName="search"
        placeholder="Digite para pesquisar"
      />
    </>
  );
};

export default withLayout(Sandbox);
