import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import { RootState } from '.';

export interface UserProfile {
  id: any;
  name: string;
  email: string;
  verified: boolean;
  adhar: string;
  role: string;
  dob: string;
  voterId: string;
  mobile: string;
  address: string;
  age: number;
  assembly: string;
  state: string;
  imageurl: string | null;
}

interface AuthState {
  profile: UserProfile | null;
  loggedIn: boolean;
  busy:boolean;
};

const initialState: AuthState = {
  profile: null,
  loggedIn: false,
  busy:false
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateProfile(authState, {payload}: PayloadAction<UserProfile | null>) {
      authState.profile = payload;
    },
    updateLoggedInState(authState, {payload}) {
        authState.loggedIn = payload
    },
    updateBusyState(authState, {payload}:PayloadAction<boolean>) {
        authState.busy = payload
    },
  },
});

export const {updateLoggedInState,updateProfile,updateBusyState} = slice.actions;

export const getAuthState = createSelector(
  (state:RootState)=>state,
  ({auth})=> auth
)

export default slice.reducer;
