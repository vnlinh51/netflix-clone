import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

import video from '../assets/video.mp4';
import { firebaseAuth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeMovieFromLiked } from '../store';

export default React.memo(function Card({ movieData, index, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate('/login');
    }
  });

  const addToList = async () => {
    // console.log('add list');
    try {
      await axios.post('http://localhost:5000/api/user/add', { email, data: movieData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="card"
        onClick={() => navigate('/player')}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate('/player')}
            />
            <video
              src={video}
              poster={`https://image.tmdb.org/t/p/original${movieData.image}`}
              autoPlay
              loop
              muted
              onClick={() => navigate('/player')}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate('/player')}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp title="Play" onClick={() => navigate('/player')} />
                {isLiked ? (
                  <BsCheck
                    title="Remove From List"
                    onClick={() => dispatch(removeMovieFromLiked({ movieId: movieData.id, email }))}
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>

            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
});

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    height: max-content;
    width: 20rem;
    top: -16vh;
    left: 0;
    position: absolute;
    z-index: 99;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 1s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        position: absolute;
        top: 0;
        z-index: 5;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        z-index: 6;
        position: absolute;
        top: 0;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        border-radius: 50%;
        border: 1px solid white;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
