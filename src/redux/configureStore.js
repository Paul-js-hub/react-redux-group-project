import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
