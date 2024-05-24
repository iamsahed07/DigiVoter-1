import CandidateCard from "../components/CandidateCard.tsx";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client.ts";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../store/auth.ts";
import { getCandidateState, updateCandidateAsAssemblyId, updateCandidateProfile } from "../store/candidate.ts";
import { getElectionsState } from "../store/election.ts";

export const VotingArea = () => {
  const {profile} = useSelector(getAuthState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {profiles,candidateAsAssemblyId} = useSelector(getCandidateState);
  const {liveElectionId} = useSelector(getElectionsState)


  function handleNavigation(CandidateId:string,ElectionId:string|null,CanAsAssemblyId:string|null) {
    navigate(`candidate/${CandidateId}/${ElectionId}/${CanAsAssemblyId}`);
  }
  useEffect(()=>{
    const getCandidates = async()=>{
      const { data } = await client.patch("/candidates/get-based-on-assembly",{assembly:profile?.assembly});
      // console.log(data);
      dispatch(updateCandidateProfile(data.candidates))
      dispatch(updateCandidateAsAssemblyId(data.id))
    }
    getCandidates()
  },[])
  // console.log(id);
  return (
    <div className="flex flex-col w-3/4 mr-10 mt-10">
      <Container className="pb-12  mt-5">
        <div className="px-5 py-2 mx-auto bg-white rounded-lg shadow-sm w-fit">
          <h3 className="text-sm font-bold ">CANDIDATES</h3>
        </div>
        <div className="flex flex-wrap w-[80%] sm:w-2/3 mx-auto justify-evenly gap-x-7 gap-y-10 mt-10 ">
          {profiles?.map(({ _id, name, party }) => (
            <button
              key={_id}
              onClick={() => handleNavigation(_id,liveElectionId, candidateAsAssemblyId)}
            >
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
