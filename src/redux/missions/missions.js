import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    pending: true,
    error: false,
  },
  reducers: {
    joinMission: (state, action) => {
      const newState = state;
      const currentState = newState.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      newState.missions = currentState;
    },
    leaveMission: (state, action) => {
      const newState = state;
      const currentState = newState.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      newState.missions = currentState;
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      const newState = state;
      newState.pending = true;
      newState.error = false;
    },
    [getMissions.fulfilled]: (state, action) => {
      const newState = state;
      const currentState = (action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      })));
      newState.pending = false;
      newState.missions = currentState;
    },
    [getMissions.rejected]: (state) => {
      const newState = state;
      newState.pending = false;
      newState.error = true;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
