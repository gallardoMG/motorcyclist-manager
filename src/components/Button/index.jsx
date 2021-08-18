import React from 'react';
import { ButtonGeneric } from './ButtonElements';

const Button = ({ value, event }) => {
  return <ButtonGeneric onClick={event}>{value}</ButtonGeneric>;
};

export default Button;
