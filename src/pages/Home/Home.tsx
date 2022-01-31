import { NextPage } from 'next';
import React from 'react';
import Button from '@components/Button';

import { Container } from './Home.styles';

const Home: NextPage = () => {
  return (
    <Container>
      <p>Hello, World</p>
      <Button name="example-button">Press me</Button>
    </Container>
  );
};

export default Home;
