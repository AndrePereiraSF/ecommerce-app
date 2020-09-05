import React from 'react';
import { Controller } from 'react-hook-form';

import { Input, ErrorMessage } from './styles';

export default function ControlledInput(props) {
  const {
    type = 'text',
    name,
    control,
    defaultValue = '',
    rules,
    error
  } = props;

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ onChange, onBlur, value }) => 
          <Input type={type} value={value} onChange={onChange} onBlur={onBlur} />
        }
        rules={rules}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
}
