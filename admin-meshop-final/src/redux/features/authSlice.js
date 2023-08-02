import { createSlice } from '@reduxjs/toolkit';
let user = localStorage.getItem('jwtUser');
    user = JSON.parse(user);
let jwtToken = localStorage.getItem('jwtToken');
const initialState = {
  isAuthenticated: false,
  user: user,
};

if (jwtToken) {
  initialState.isAuthenticated = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {

      console.log('login reducer');
      console.log(action.payload);
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.access_token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
