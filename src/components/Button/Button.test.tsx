import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

test('Button Test', () => {
  const { getByTestId, container } = render(<Button name="test">Hello</Button>);

  const buttonNode = getByTestId('test');

  expect(buttonNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
