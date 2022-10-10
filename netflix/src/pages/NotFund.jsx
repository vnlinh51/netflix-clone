import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import notfund from '../assets/notfund-img.jpg';

export default function NotFund() {
  const navigate = useNavigate();
  return (
    <Container className="flex j-center a-center">
      {/* <img src={notfund} alt="not-fund" /> */}
      <h1>Lost your way?</h1>
      <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
      <button onClick={() => navigate('/')}>
        <span>Netflix Home</span>
      </button>
      <p>
        Error Code <b>NSES-404</b>
      </p>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 700;
    text-shadow: #000000 0px 1px 2px;
  }
  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.4rem;
    text-shadow: #000000 0px 1px 2px;
  }
  button {
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 0.6rem;
    line-height: 0.6rem;
    padding: 7px 21px;
    text-align: center;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
    span {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5rem;
      text-align: center;
    }
  }
  b {
    font-weight: 700;
  }
`;
