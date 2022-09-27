import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseAuth } from '../utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {};

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex-column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>

            <div className="container flex column">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Sign In</button>
              {/* <input type="checkbox" /> <span>Remember me</span> */}
              45:54
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;

      .text {
        text-align: center;
        /* gap: 1rem; */
        /* font-size: 2rem; */

        h1 {
          font-size: 3rem;
          padding: 0 22rem;
          font-weight: 700;
        }
      }

      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) => (showPassword ? '1fr 1fr' : '2fr 1fr')};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
          color: #ffffff;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        color: #ffffff;
      }
    }
  }
`;
