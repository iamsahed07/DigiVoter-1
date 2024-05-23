import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface CandidateProfile {
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
  party:string;
  age: number;
  assembly: string;
  state: string;
  imageurl: string;
}

interface CandidateState {
  profiles: [CandidateProfile] | null;
}

const initialState: CandidateState = {
  profiles: null,
};

const slice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    updateCandidateProfile(
      CandidateState,
      {payload}: PayloadAction<[CandidateProfile] | null>
    ) {
      CandidateState.profiles = payload;
    },
  },
});

export const { updateCandidateProfile } =
  slice.actions;

export const getCandidateState = createSelector(
  (state: RootState) => state,
  ({ candidate }) => candidate
);

export default slice.reducer;
