import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: HTMLButtonElement['name'];
  /** Indicates whether the button is in loading state where it shows a spinner */
  disabled?: boolean;
  /** When true, the button will occupy 100% width of its parent */
  fullWidth?: boolean;
}
