import React from 'react';
import { Tmc, Inc, Bjp, Cpim, Aap, Sjp, Rjp } from "../components/PartySymbol";
import * as CandidatePhotos from "../components/CandidatePhotos";

const CandidateCard = ({ id, photoKey, name, party, age }) => {
  // Mapping party names to their respective symbols
  const partySymbolMap = {
    "All India Trinamool Congress": <Tmc />,
    "Indian National Congress": <Inc />,
    "Bharatiya Janata Party": <Bjp />,
    "Shiv Sena": <Cpim />,
    "Aam Aadmi Party": <Aap />,
    "Nationalist Congress Party": <Sjp />,
    "Biju Janata Dal": <Rjp />,
  };

  // Function to handle the Google search
  const handleGoogleSearch = () => {
    const searchTerm = `${name} ${party}`;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`
    );
  };

  // Mapping photo key to the respective photo
  const candidatePhoto = CandidatePhotos[photoKey];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Candidate photo */}
      <div className="flex justify-center">
        <img src={candidatePhoto} alt="Candidate" className="w-full h-auto" />
      </div>
      {/* Candidate details */}
      <div className="p-4 flex items-center justify-between">
        <div>
          {/* Candidate name */}
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          {/* Candidate ID */}
          <p className="text-gray-700 mb-1">ID: {id}</p>
          {/* Candidate age */}
          <p className="text-gray-700">Age: {age}</p>
          {/* Candidate party */}
          <p className="text-gray-700">Party: {party}</p>
        </div>
        {/* Party symbol */}
        <div className="ml-4" style={{ width: "2.5cm", height: "2.5cm" }}>
          {partySymbolMap[party]}
        </div>
      </div>
      {/* Search button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={handleGoogleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
