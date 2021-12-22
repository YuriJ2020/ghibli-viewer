import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const faveSlice = createSlice({
  name: 'faveSlice',
  initialState: { faves: [] },
  reducers: {
    reset: (state, action) => {
      // get a payload of total
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

export const { flip, reset } = faveSlice.actions;

export const selectFave = (id) => (state) => _.find(state.faveSlice.faves, { id });

// export const selectFave = (id) => {
//   const selector = (state) => _.find(state.faveSlice.faves, { id });
//   return selector;
// };

export const selectFaveCount = (state) => state.faveSlice.faves.length;

export default faveSlice.reducer;
