import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './RocketsService';
/* eslint-disable no-param-reassign */

const initialState = {
  loaded: false,
  data: [],
  reserved: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { payload: rocketId } = action;
      state.data.map((rocket) => {
        if (rocket.id === rocketId) {
          rocket.reserved = !rocket.reserved;
        }
        return rocket;
      });
    },
    getReserved: (state) => {
      const reserved = state.data.filter((rocket) => {
        if (rocket.reserved === true) {
          return rocket;
        }
        return null;
      });
      return { ...state, reserved: [...reserved] };
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const rocketsObj = Object.entries(action.payload).map((el) => {
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
      return { ...state, data: rocketsObj, loaded: true };
    },
  },
});

export const { reserveRocket, getReserved } = rocketsSlice.actions;
export default rocketsSlice.reducer;
