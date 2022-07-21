import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return response;
});

export default fetchRockets;
