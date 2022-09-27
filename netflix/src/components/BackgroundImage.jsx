import React from 'react';
import background from '../assets/login.jpg';
import styled from 'styled-components';

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100vw;
  img {
    height: auto;
    width: 100vw;
  }
`;
