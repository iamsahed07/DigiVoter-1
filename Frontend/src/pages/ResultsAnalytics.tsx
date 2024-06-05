import React, { useState } from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Select from "react-select";

// Import party symbols
import Tmc from "../assets/party_logo/tmc.svg";
import Inc from "../assets/party_logo/inc.png";
import Bjp from "../assets/party_logo/bjp.png";
import Cpim from "../assets/party_logo/cpim.png";

const ResultsAnalytics = () => {
  const navigate = useNavigate();

  const [selectedElection, setSelectedElection] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");

  const states = [
    { value: "all", label: "All States" },
    { value: "westBengal", label: "West Bengal" },
    { value: "karnataka", label: "Karnataka" },
    { value: "gujarat", label: "Gujarat" },
    // Add other states here
  ];

  const constituencies = {
    westBengal: [
      { value: "constituency1", label: "Constituency 1" },
      { value: "constituency2", label: "Constituency 2" },
      // Add more constituencies for West Bengal
    ],
    karnataka: [
      { value: "constituency1", label: "Constituency 1" },
      { value: "constituency2", label: "Constituency 2" },
      // Add more constituencies for Karnataka
    ],
    gujarat: [
      { value: "constituency1", label: "Constituency 1" },
      { value: "constituency2", label: "Constituency 2" },
      // Add more constituencies for Gujarat
    ],
    // Add constituencies for other states
  };

  // Mocked election results data
  const electionResults = [
    { id: 1, candidate: "Candidate A", party: "TMC", votes: 1200, logo: Tmc },
    { id: 2, candidate: "Candidate B", party: "INC", votes: 1000, logo: Inc },
    { id: 3, candidate: "Candidate C", party: "BJP", votes: 800, logo: Bjp },
    { id: 4, candidate: "Candidate D", party: "CPIM", votes: 700, logo: Cpim },
  ];

  const handleSelectElection = (e) => {
    setSelectedElection(e.target.value);
    console.log("Selected election:", e.target.value);
  };

  const handleSelectState = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedConstituency(""); // Reset constituency on state change
    console.log("Selected state:", selectedOption);
  };

  const handleSelectConstituency = (selectedOption) => {
    setSelectedConstituency(selectedOption);
    console.log("Selected constituency:", selectedOption);
  };

  // Data for the semi-circle vote meter
  const voteData = {
    labels: electionResults.map((result) => result.party),
    datasets: [
      {
        data: electionResults.map((result) => result.votes),
        backgroundColor: ["#3498DB", "#E74C3C", "#F1C40F", "#8E44AD"], // Premium colors for TMC, INC, BJP, CPIM respectively
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "Helvetica Neue, Helvetica, Arial, sans-serif",
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container className="bg-white col-start-2 col-end-12 mt-1 mb-6 shadow-lg rounded-lg h-full">
        <div className="bg-indigo-600 text-white rounded-t-md shadow-lg">
          <div className="flex justify-center items-center h-12">
            <h1 className="py-2 text-xl font-bold uppercase">
              Results and Analytics
            </h1>
          </div>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-6rem)]">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div className="w-1/3 pr-2">
                <select
                  className="button-style"
                  onChange={handleSelectElection}
                  value={selectedElection}
                >
                  <option value="" disabled>
                    Select Election
                  </option>
                  <option value="Election 1">Election 1</option>
                  <option value="Election 2">Election 2</option>
                </select>
              </div>
              <div className="w-1/3 px-2">
                <Select
                  className="button-style"
                  options={states}
                  onChange={handleSelectState}
                  value={selectedState}
                  placeholder="Select State"
                />
              </div>
              <div className="w-1/3 pl-2">
                <Select
                  className="button-style"
                  options={
                    selectedState && constituencies[selectedState.value]
                      ? constituencies[selectedState.value]
                      : []
                  }
                  onChange={handleSelectConstituency}
                  value={selectedConstituency}
                  placeholder="Select Constituency"
                  isDisabled={!selectedState || selectedState.value === "all"}
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-gray-800">
                Vote Distribution
              </h2>
              <div
                className="w-full flex justify-center items-center"
                style={{ height: "150px" }}
              >
                <div className="w-1/2 p-4 bg-white shadow-md rounded-lg transition duration-300 hover:shadow-lg transform hover:scale-105">
                  <Doughnut data={voteData} options={options} />
                </div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
              Election Results
            </h2>
            <ul className="space-y-4">
              {electionResults.map((election, index) => (
                <li
                  key={election.id}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                      #{index + 1}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                      {election.candidate}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                      {election.party}
                    </p>
                    <img
                      src={election.logo}
                      alt={`${election.party} logo`}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                      {election.votes} Votes
                    </p>
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
