import React from "react";

const CandidateList = ({ candidates, onVote, votedCandidate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="bg-white p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{candidate.name}</h3>
            <img
              src={candidate.photo}
              alt={candidate.name}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg text-gray-600">{candidate.party}</p>
              <img
                src={candidate.symbol}
                alt={candidate.party}
                className="w-8 h-8"
              />
            </div>
            <button
              onClick={() => onVote(candidate)}
              disabled={votedCandidate !== null}
              className={`px-4 py-2 bg-green-500 text-white font-semibold rounded-md ${
                votedCandidate !== null
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              {votedCandidate !== null ? "Voted" : "Vote"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
