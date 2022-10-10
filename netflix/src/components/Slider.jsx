import React from 'react';

import CardSlider from './CardSlider';

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Popular on Netflix" data={getMoviesFromRange(0, 10)} />
      <CardSlider title="Trending Now" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="Award-wining Western TV Shows" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Asian Movies & TV" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="New Release" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Watch In One Weekend" data={getMoviesFromRange(50, 60)} />
    </div>
  );
}
