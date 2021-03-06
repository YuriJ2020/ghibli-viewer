import { configureStore } from '@reduxjs/toolkit';

import faveReducer from './faveSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { ghibliApi } from './services/ghibliApi';

export const store = configureStore({
  reducer: {
    faveSlice: faveReducer,
    // Add the generated reducer as a specific top-level slice
    [ghibliApi.reducerPath]: ghibliApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ghibliApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
