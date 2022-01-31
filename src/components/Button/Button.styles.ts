/* eslint-disable indent */
import { buttonReset, centredFlex } from '@theme/shortcuts';
import { sizes } from '@theme/sizes';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.models';

export const ButtonContainer = styled.button<ButtonProps>`
  ${buttonReset}
  ${centredFlex}
  width: ${(p) => (p.fullWidth ? '100%' : css`calc(100vw - ${sizes[40]})`)};
  height: ${sizes[50]};
  background-color: ${(p) => (p.disabled ? 'gray' : 'green')};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};
  color: white;
  &:hover {
    background-color: ${(p) => (p.disabled ? 'gray' : 'blue')};
    cursor: ${(p) => (p.disabled ? 'auto' : 'pointer')};
  }
  @media (min-width: 480px) {
    width: ${(p) => (p.fullWidth ? '100%' : sizes[350])};
  }
`;
