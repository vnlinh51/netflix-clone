import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NotFund from './NotFund';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';
import NotAvailable from '../components/NotAvailable';

export default function TVShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ genres, type: 'tv' }));
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate('/login');
  });

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>

      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? (
          <Slider movies={movies} />
        ) : (
          <h1 className="not-available">
            No TV Shows available for the selected genre. Please select a different genre.
          </h1>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
