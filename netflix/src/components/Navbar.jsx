import React, { useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaPowerOff, FaSearch } from 'react-icons/fa';

import { firebaseAuth } from '../utils/firebase';
import logo from '../assets/logo.png';

export default function Navbar({ isScrolled }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'My List', link: '/my-list' },
  ];

  //=========== check login ===========
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login');
  });

  return (
    <Container>
      <nav className={`${isScrolled ? 'scrolled' : 'nscr'} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? 'show-search' : ''}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search..."
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <div className="noti">
            <FaBell />
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: #141414;
  }

  .nscr {
    background-image: linear-gradient(black, transparent);
  }

  nav {
    position: sticky;
    top: 0;
    height: 4rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    z-index: 2;

    .left {
      gap: 2rem;

      .brand {
        img {
          height: 4rem;
        }
      }

      .links {
        gap: 2rem;
        list-style-type: none;
        li {
          cursor: pointer;

          a {
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      align-items: center;
      text-align: center;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }

      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }

          svg {
            color: #ffffff;
            font-size: 1.1rem;
          }
        }

        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: #ffffff;
          &:focus {
            outline: none;
          }
        }
      }

      .show-search {
        border: 1px solid #ffffff;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
      .noti:hover {
        cursor: pointer;
      }

      /* button {
        display: flex;
        justify-content: center;
        align-items: center;
      } */
    }
  }
`;
