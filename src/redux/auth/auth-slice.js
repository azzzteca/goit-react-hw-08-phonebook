import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  registerError: false,
  loginError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      if (action.payload === undefined) {
        state.registerError = true;
        return;
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.registerError = false;
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      if (action.payload === undefined) {
        state.loginError = true;
        return;
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loginError = false;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
