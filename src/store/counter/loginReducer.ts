import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// declaring the types for our state
export type LoginState = {
  loggedIn: boolean;
  access_token: string;
};

const initialState: LoginState = {
  loggedIn: false,
  access_token: null,
};

// interface TLoginPayload {

// }

export const counterSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      return { loggedIn: true, ...action.payload };
    },
    logout: () => {
      return { loggedIn: false, access_token: null };
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const loginUser = (state: RootState) => state.user;

export default counterSlice.reducer;
