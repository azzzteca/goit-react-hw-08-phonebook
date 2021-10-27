import axios from 'axios';
// const axios = require('axios').default;

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
