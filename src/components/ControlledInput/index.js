import React from 'react';
import { Controller } from 'react-hook-form';

import { Input } from './styles';

export default function ControlledInput(props) {
  const { type = 'text', name, control, defaultValue = '' } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value }) => 
        <Input type={type} value={value} onChange={onChange} />
      }
    />
  );
}
