import React, { useState } from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "../store/auth";
import { Aitmc, Inc, Bjp, Cpim, Aap, Sjp, Rjp } from "../components/PartySymbols";
import * as CandidatePhotos from "../components/CandidatePhotos";
import { ImArrowLeft } from "react-icons/im";

const candidatesData = [
  {
    id: "1",
    name: "Rahul Gandhi",
    party: "Indian National Congress",
    photo: CandidatePhotos.Candidate1,
    partySymbol: Inc,
    color: "#0F56B3",
  },
  {
    id: "2",
    name: "Amit Shah",
    party: "Bharatiya Janata Party",
    photo: CandidatePhotos.Candidate2,
    partySymbol: Bjp,
    color: "#FF9933",
  },
  {
    id: "3",
    name: "Mamata Banerjee",
    party: "All India Trinamool Congress",
    photo: CandidatePhotos.Candidate3,
    partySymbol: Aitmc,
    color: "#008000",
  },
  {
    id: "4",
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party",
    photo: CandidatePhotos.Candidate4,
    partySymbol: Aap,
    color: "#00FFFF",
  },
  {
    id: "5",
    name: "Akhilesh Yadav",
    party: "Samajwadi Party",
    photo: CandidatePhotos.Candidate5,
    partySymbol: Sjp,
    color: "#0000FF", // Example color as NCP is not listed, using blue
  },
  {
    id: "6",
    name: "Biman Bose",
    party: "Communist Party of India (Marxist) (CPIM)",
    photo: CandidatePhotos.Candidate6,
    partySymbol: Cpim,
    color: "#800080", // Example color as Shiv Sena is not listed, using purple
  },
  {
    id: "7",
    name: "Shankersinh Vaghela",
    party: "Rashtriya Janata Party (RJP)",
    photo: CandidatePhotos.Candidate7,
    partySymbol: Rjp,
    color: "#008000", // Example color as BJD is not listed, using green
  },
];

export default function CastVote() {
  const { profile } = useSelector(getAuthState);
  const navigate = useNavigate();
  const [votedCandidateId, setVotedCandidateId] = useState(null);

  const handleVoteClick = (candidateId) => {
    setVotedCandidateId(candidateId);
    // Perform other actions related to voting like showing the OTP popup, etc.
  };

  return (
    <div className="flex flex-col w-full md:w-3/4 md:float-right md:mr-10 h-screen mt-10">
      <Container className="bg-white col-start-2 col-end-12 mt-1 mb-6 shadow-2xl">
        <div className="bg-blue-500 text-center text-white rounded-t-md shadow-lg">
          <h1 className="py-2 text-lg font-bold">Cast Vote</h1>
        </div>
        <div className="flex flex-col items-center p-4">
          {candidatesData.map((candidate, index) => (
            <div
              key={candidate.id}
              className="flex items-center w-full p-4 border-b"
            >
              <span className="mr-4 text-lg">{index + 1}</span>
              <div
                className="w-1.5 h-12 mr-4"
                style={{ backgroundColor: candidate.color }}
              ></div>
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{candidate.name}</h2>
                <p className="text-sm">{candidate.party}</p>
              </div>
              {candidate.partySymbol && (
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <candidate.partySymbol />
                </div>
              )}
              <ImArrowLeft
                className={`text-lg ml-auto mr-auto ${
                  votedCandidateId === candidate.id ? "text-red-500" : "text-gray-600"
                }`}
              />
              <button
                className={`ml-4 text-sm bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out ${
                  votedCandidateId === candidate.id ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleVoteClick(candidate.id)}
                disabled={votedCandidateId === candidate.id}
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}