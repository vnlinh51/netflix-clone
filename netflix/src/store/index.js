import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY, TMDB_BASE_URL } from '../utils/constants';

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk('netflix/genres', async () => {
  const { data } = await `${TMDB_BASE_URL}/genres/movie/list?api_key${API_KEY}`;
});

const NetflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
