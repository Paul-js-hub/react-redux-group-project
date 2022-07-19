import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './RocketsService';

const initialState = [
  {
  },
];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, payload) => {
      const loaded = [{
        loaded: true,
      }];
      const rocketsObj = Object.entries(payload.payload).map((el) => {
        const r = el[1];
        const obj = {
          id: r.id,
          name: r.rocket_name,
          flickr_images: r.flickr_images,
          description: r.description,
          reserved: false,
        };

        return obj;
      });

      return [...loaded, ...rocketsObj];
    },
  },
});

export default rocketsSlice.reducer;
