import React, { useState, useEffect } from 'react';

import { QuantityPickerContainer, Button, Counter } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function QuantityPicker({ initialValue = 1, max = 10 }) {
  const [value, setValue] = useState(1);

  const handlePlus = () => {
    if(value <= max) {
      const newValue = value + 1;
      setValue(newValue);
    }
  };
	
  const handleMinus = () => {
    if(value > 1) {
      const newValue = value - 1;
      setValue(newValue);
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, []);

  return (
    <QuantityPickerContainer>
      <Button>
        <FontAwesomeIcon onClick={handleMinus} icon="minus" size="sm" />
      </Button>
      <Counter>{value}</Counter>
      <Button>
        <FontAwesomeIcon onClick={handlePlus} icon="plus" size="sm" />
      </Button>
    </QuantityPickerContainer>
  );
}
