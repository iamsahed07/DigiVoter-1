import CandidateCard from "../components/CandidateCard.tsx";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client.ts";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../store/auth.ts";
import { getCandidateState, updateCandidateProfile } from "../store/candidate.ts";

export const VotingArea = () => {
  const {profile} = useSelector(getAuthState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {profiles} = useSelector(getCandidateState);


  function handleNavigation(id:string) {
    navigate(`candidate/${id}`);
  }
  useEffect(()=>{
    const getCandidates = async()=>{
      const { data } = await client.patch("/candidates/get-based-on-assembly",{assembly:profile?.assembly});
      dispatch(updateCandidateProfile(data.candidates))
    }
    getCandidates()
  },[])
  return (
    <div className="flex flex-col w-3/4 mr-10 mt-10">
      <Container className="pb-12  mt-5">
        <div className="px-5 py-2 mx-auto bg-white rounded-lg shadow-sm w-fit">
          <h3 className="text-sm font-bold ">CANDIDATES</h3>
        </div>
        <div className="flex flex-wrap w-[80%] sm:w-2/3 mx-auto justify-evenly gap-x-7 gap-y-10 mt-10 ">
          {profiles?.map(({ id, name, party }) => (
            <button key={id} onClick={() => handleNavigation(id)}>
              <CandidateCard
                width={"44"}
                className={"h-44 w-44"}
                url={`./src/assets/party-images/${party}.png`}
                candidateName={name}
                party={party}
              />
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};
