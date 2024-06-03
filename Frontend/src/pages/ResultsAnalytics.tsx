import React, { useState } from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

// Import party symbols
import Tmc from "../assets/party_logo/tmc.svg";
import Inc from "../assets/party_logo/inc.png";
import Bjp from "../assets/party_logo/bjp.png";
import Cpim from "../assets/party_logo/cpim.png";
// import PartyB from "../assets/party-b.png";
// import PartyC from "../assets/party-c.png";
// import PartyD from "../assets/party-d.png";
// import PartyE from "../assets/party-e.png";
// import PartyF from "../assets/party-f.png";
// import PartyG from "../assets/party-g.png";

const ResultsAnalytics = () => {
  const navigate = useNavigate();

  const [selectedElection, setSelectedElection] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState("");

  // Mocked election results data
  const electionResults = [
    { id: 1, candidate: "Candidate A", party: "TMC", votes: 1200, logo: Tmc },
    { id: 2, candidate: "Candidate B", party: "INC", votes: 1000, logo: Inc },
    { id: 3, candidate: "Candidate C", party: "BJP", votes: 800, logo: Bjp },
    { id: 4, candidate: "Candidate D", party: "CPIM", votes: 700, logo: Cpim },
    // { id: 5, candidate: "Candidate E", party: "Party B", votes: 600, logo: PartyB },
    // { id: 6, candidate: "Candidate F", party: "Party C", votes: 500, logo: PartyC },
    // { id: 7, candidate: "Candidate G", party: "Party D", votes: 400, logo: PartyD },
    // { id: 8, candidate: "Candidate H", party: "Party E", votes: 300, logo: PartyE },
    // { id: 9, candidate: "Candidate I", party: "Party F", votes: 200, logo: PartyF },
    // { id: 10, candidate: "Candidate J", party: "Party G", votes: 100, logo: PartyG },
  ];

  const handleSelectElection = (e) => {
    setSelectedElection(e.target.value);
    console.log("Selected election:", e.target.value);
  };

  const handleSelectAssembly = (e) => {
    setSelectedAssembly(e.target.value);
    console.log("Selected assembly:", e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container className="bg-white col-start-2 col-end-12 mt-1 mb-6 shadow-lg rounded-lg h-full">
        <div className="bg-indigo-600 text-white rounded-t-md shadow-lg">
          <div className="flex justify-center items-center h-12">
            <h1 className="py-2 text-xl font-bold uppercase">Results and Analytics</h1>
          </div>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-6rem)]">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div className="relative inline-block text-left w-1/2 pr-2">
                <select
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
                  onChange={handleSelectElection}
                  value={selectedElection}
                >
                  <option value="" disabled>Select Election</option>
                  <option value="Election 1">Election 1</option>
                  <option value="Election 2">Election 2</option>
                </select>
              </div>
              <div className="relative inline-block text-left w-1/2 pl-2">
                <select
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-105"
                  onChange={handleSelectAssembly}
                  value={selectedAssembly}
                >
                  <option value="" disabled>Select Assembly</option>
                  <option value="Assembly 1">Assembly 1</option>
                  <option value="Assembly 2">Assembly 2</option>
                  <option value="Assembly 3">Assembly 3</option>
                  <option value="Assembly 4">Assembly 4</option>
                </select>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
              Election Results
            </h2>
            <ul className="space-y-4">
              {electionResults.map((election, index) => (
                <li key={election.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">#{index + 1}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">{election.candidate}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">{election.party}</p>
                    <img
                      src={election.logo}
                      alt={`${election.party} logo`}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">{election.votes} Votes</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResultsAnalytics;
