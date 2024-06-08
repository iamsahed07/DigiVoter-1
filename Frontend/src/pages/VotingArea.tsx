import React, { useState } from "react";
import { Container } from "../components/Container";

const elections = [
  { id: "1", name: "Lok Sabha Election", status: "live" },
  { id: "2", name: "Vidhan Sabha", status: "upcoming" },
  { id: "3", name: "Other Election", status: "upcoming" }
];

const candidates = [
  { id: "1", name: "Rahul Kumar", party: "Indian National Congress", photo: "/photos/rahul_kumar.jpg", symbol: "Inc" },
  { id: "2", name: "Amit Shah", party: "Bharatiya Janata Party", photo: "/photos/amit_shah.jpg", symbol: "Bjp" },
  { id: "3", name: "Mamata Banerjee", party: "All India Trinamool Congress", photo: "/photos/mamata_banerjee.jpg", symbol: "Tmc" },
  { id: "4", name: "Arvind Kejriwal", party: "Aam Aadmi Party", photo: "/photos/arvind_kejriwal.jpg", symbol: "Aap" },
  { id: "5", name: "Sharad Pawar", party: "Nationalist Congress Party", photo: "/photos/sharad_pawar.jpg", symbol: "Sjp" },
  { id: "6", name: "Uddhav Thackeray", party: "Shiv Sena", photo: "/photos/uddhav_thackeray.jpg", symbol: "Cpim" },
  { id: "7", name: "Naveen Patnaik", party: "Biju Janata Dal", photo: "/photos/naveen_patnaik.jpg", symbol: "Rjp" }
];

const VotingArea = () => {
  const [selectedElection, setSelectedElection] = useState(null);

  const handleElectionClick = (electionId) => {
    setSelectedElection(electionId);
  };

  const handleVoteClick = () => {
    // Implement voting logic here
    console.log("Vote clicked!");
  };

  const handleCloseClick = () => {
    setSelectedElection(null);
  };

  const liveElections = elections.filter(election => election.status === "live");
  const upcomingElections = elections.filter(election => election.status === "upcoming");

  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container className="bg-gray-50 col-start-2 col-end-12 mt-1 mb-6 shadow-lg rounded-lg h-full">
        <div className="bg-indigo-500 text-white rounded-t-md shadow-lg">
          <div className="flex justify-center items-center h-12">
            <h1 className="py-2 text-3xl font-bold uppercase">Voting Area</h1>
          </div>
        </div>
        {!selectedElection && (
          <div className="grid grid-cols-1 gap-8 p-6">
            <h2 className="text-2xl font-bold text-left border-b-2 border-gray-300 pb-2">Live Elections</h2>
            {liveElections.map(election => (
              <div key={election.id} className="p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out bg-green-200 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{election.name}</h3>
                  <div>
                    <button className="text-sm bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out mr-2" onClick={() => handleElectionClick(election.id)}>View Candidates</button>
                    <button className="text-sm bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 transition duration-300 ease-in-out" onClick={handleVoteClick}>Vote</button>
                  </div>
                </div>
              </div>
            ))}
            <h2 className="text-2xl font-bold text-left border-b-2 border-gray-300 pb-2">Upcoming Elections</h2>
            {upcomingElections.map(election => (
              <div key={election.id} className="p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out bg-purple-200 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{election.name}</h3>
                  <button className="text-sm bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out">View Candidates</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedElection && (
          <div className="mt-8 p-6 w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Candidates for {elections.find(e => e.id === selectedElection).name}</h2>
              <button className="text-sm bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 transition duration-300 ease-in-out" onClick={handleCloseClick}>Close</button>
            </div>
            <ul>
              {candidates.map(candidate => (
                <li key={candidate.id} className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center">
                  <img src={candidate.photo} alt={candidate.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{candidate.name}</h3>
                    <p className="text-base text-gray-700">Party: {candidate.party}</p>
                    <p className="text-base text-gray-700">Symbol: {candidate.symbol}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default VotingArea;
