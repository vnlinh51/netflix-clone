import React from 'react';
import styled from 'styled-components';
import CardSlider from './CardSlider';

export default function Slider({ movies }) {
  // =========== get movie ===========
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="New Releases" />
      <CardSlider data={getMoviesFromRange(20, 30)} title="Only on Netflix" />
      <CardSlider data={getMoviesFromRange(30, 40)} title="New Release" />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Good for you" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Released Last Year" />
    </Container>
  );
}

const Container = styled.div``;
