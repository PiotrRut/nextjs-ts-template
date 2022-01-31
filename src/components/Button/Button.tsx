import React, { forwardRef } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    disabled = false,
    children,
    fullWidth = false,
    name,
    ...rest
  } = props;

  return (
    <ButtonContainer
      {...{ disabled, fullWidth, ref, ...rest }}
      data-testid={name}
      name={name}
    >
      {children}
    </ButtonContainer>
  );
});

export default Button;
