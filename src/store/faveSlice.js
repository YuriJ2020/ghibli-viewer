import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const faveSlice = createSlice({
  name: 'faveSlice',
  initialState: { show: false, faves: [] },
  reducers: {
    open: (state) => {
      state.show = true;
    },
    close: (state) => {
      state.show = false;
    },
    reset: (state, action) => {
      // get a payload of total movies
      const total = action.payload;
      // create Array instance
      const initial = Array.from({ length: total }, (_v, i) => ({ id: i, fave: false }));
      state.faves = initial;
    },
    flip: (state, action) => {
      const mid = action.payload;
      const target = _.find(state.faves, { id: mid }) ?? { id: mid, fave: false }; // null coalescing operator
      target.fave = !target.fave;
    },
  },
});

export const { open, close, flip, reset } = faveSlice.actions;

export const selectShow = (state) => state.faveSlice.show;

export const selectFave = (id) => (state) => _.find(state.faveSlice.faves, { id });

export const selectFaveCount = (state) => state.faveSlice.faves.length;

export const selectFavedMovieIds = (state) => {
  const favedMovies = _.filter(state.faveSlice.faves, (item) => item.fave);
  return _.map(favedMovies, (item) => item.id);
};

export default faveSlice.reducer;
