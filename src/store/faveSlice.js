import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const faveSlice = createSlice({
  name: 'faveSlice',
  initialState: { faves: [] },
  reducers: {
    reset: (state, action) => {
      const total = action.payload;
      const initial = Array.from({ length: total }, (_v, i) => ({ id: i, fave: false }));
      state.faves = initial;
    },
    flip: (state, action) => {
      const mid = action.payload;
      const target = _.find(state.faves, { id: mid }) ?? { id: mid, fave: false };
      target.fave = !target.fave;
    },
  },
});

export const { flip, reset } = faveSlice.actions;

export default faveSlice.reducer;
