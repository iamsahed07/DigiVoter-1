import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface CandidateProfile {
  _id: any;
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
  candidateAsAssemblyId: string | null;
  profiles: [CandidateProfile] | null;
  assembly:string | null;
}

const initialState: CandidateState = {
  candidateAsAssemblyId:null,
  profiles: null,
  assembly:null
};

const slice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    updateCandidateProfile(
      CandidateState,
      {payload}: PayloadAction<[CandidateProfile] | null>
    ) {
      CandidateState.profiles = payload
    },
    updateCandidateAsAssemblyId(
      CandidateState,
      {payload}: PayloadAction< string | null>
    ){
      CandidateState.candidateAsAssemblyId = payload
    }
  },
});

export const { updateCandidateProfile, updateCandidateAsAssemblyId } = slice.actions;

export const getCandidateState = createSelector(
  (state: RootState) => state,
  ({ candidate }) => candidate
);

export default slice.reducer;
