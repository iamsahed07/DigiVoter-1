import React from 'react';

interface Candidate {
  name: string;
  party: string;
  age: number;
  dob: string;
  aadhaar: string;
  state: string;
  constituency: string;
  vote_count: number;
}

const candidates: Candidate[] = [
  // All India Trinamool Congress (TMC) candidates
  {
    name: "Candidate-1",
    party: "All India Trinamool Congress (TMC)",
    age: 35,
    dob: "1987-05-15",
    aadhaar: "123456789001",
    state: "State 1",
    constituency: "Constituency 1",
    vote_count: 800,
  },
  {
    name: "Candidate-2",
    party: "All India Trinamool Congress (TMC)",
    age: 42,
    dob: "1980-08-20",
    aadhaar: "123456789002",
    state: "State 2",
    constituency: "Constituency 2",
    vote_count: 750,
  },
  {
    name: "Candidate-3",
    party: "All India Trinamool Congress (TMC)",
    age: 38,
    dob: "1984-03-10",
    aadhaar: "123456789003",
    state: "State 3",
    constituency: "Constituency 3",
    vote_count: 700,
  },
  {
    name: "Candidate-4",
    party: "All India Trinamool Congress (TMC)",
    age: 37,
    dob: "1985-02-28",
    aadhaar: "123456789004",
    state: "State 4",
    constituency: "Constituency 4",
    vote_count: 780,
  },
  {
    name: "Candidate-5",
    party: "All India Trinamool Congress (TMC)",
    age: 40,
    dob: "1982-11-05",
    aadhaar: "123456789005",
    state: "State 5",
    constituency: "Constituency 5",
    vote_count: 760,
  },
  {
    name: "Candidate-6",
    party: "All India Trinamool Congress (TMC)",
    age: 32,
    dob: "1990-09-18",
    aadhaar: "123456789006",
    state: "State 6",
    constituency: "Constituency 6",
    vote_count: 740,
  },
  {
    name: "Candidate-7",
    party: "All India Trinamool Congress (TMC)",
    age: 36,
    dob: "1986-06-25",
    aadhaar: "123456789007",
    state: "State 7",
    constituency: "Constituency 7",
    vote_count: 720,
  },

  // Bharatiya Janata Party (BJP) candidates
  {
    name: "Candidate-1",
    party: "Bharatiya Janata Party (BJP)",
    age: 35,
    dob: "1987-05-15",
    aadhaar: "123456789101",
    state: "State 1",
    constituency: "Constituency 1",
    vote_count: 820,
  },
  {
    name: "Candidate-2",
    party: "Bharatiya Janata Party (BJP)",
    age: 42,
    dob: "1980-08-20",
    aadhaar: "123456789102",
    state: "State 2",
    constituency: "Constituency 2",
    vote_count: 810,
  },
  {
    name: "Candidate-3",
    party: "Bharatiya Janata Party (BJP)",
    age: 38,
    dob: "1984-03-10",
    aadhaar: "123456789103",
    state: "State 3",
    constituency: "Constituency 3",
    vote_count: 780,
  },
  {
    name: "Candidate-4",
    party: "Bharatiya Janata Party (BJP)",
    age: 37,
    dob: "1985-02-28",
    aadhaar: "123456789104",
    state: "State 4",
    constituency: "Constituency 4",
    vote_count: 770,
  },
  {
    name: "Candidate-5",
    party: "Bharatiya Janata Party (BJP)",
    age: 40,
    dob: "1982-11-05",
    aadhaar: "123456789105",
    state: "State 5",
    constituency: "Constituency 5",
    vote_count: 760,
  },
  {
    name: "Candidate-6",
    party: "Bharatiya Janata Party (BJP)",
    age: 32,
    dob: "1990-09-18",
    aadhaar: "123456789106",
    state: "State 6",
    constituency: "Constituency 6",
    vote_count: 750,
  },
  {
    name: "Candidate-7",
    party: "Bharatiya Janata Party (BJP)",
    age: 36,
    dob: "1986-06-25",
    aadhaar: "123456789107",
    state: "State 7",
    constituency: "Constituency 7",
    vote_count: 740,
  },

  // Communist Party of India (Marxist) (CPIM) candidates
  {
    name: "Candidate-1",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 45,
    dob: "1977-11-22",
    aadhaar: "123456789108",
    state: "State 1",
    constituency: "Constituency 1",
    vote_count: 720,
  },
  {
    name: "Candidate-2",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 52,
    dob: "1970-06-14",
    aadhaar: "123456789109",
    state: "State 2",
    constituency: "Constituency 2",
    vote_count: 710,
  },
  {
    name: "Candidate-3",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 48,
    dob: "1974-09-30",
    aadhaar: "123456789110",
    state: "State 3",
    constituency: "Constituency 3",
    vote_count: 700,
  },
  {
    name: "Candidate-4",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 47,
    dob: "1975-04-18",
    aadhaar: "123456789111",
    state: "State 4",
    constituency: "Constituency 4",
    vote_count: 690,
  },
  {
    name: "Candidate-5",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 53,
    dob: "1969-10-11",
    aadhaar: "123456789112",
    state: "State 5",
    constituency: "Constituency 5",
    vote_count: 680,
  },
  {
    name: "Candidate-6",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 49,
    dob: "1973-07-29",
    aadhaar: "123456789113",
    state: "State 6",
    constituency: "Constituency 6",
    vote_count: 670,
  },
  {
    name: "Candidate-7",
    party: "Communist Party of India (Marxist) (CPIM)",
    age: 51,
    dob: "1971-12-03",
    aadhaar: "123456789114",
    state: "State 7",
    constituency: "Constituency 7",
    vote_count: 660,
  },

  // Aam Aadmi Party (AAP) candidates
  {
    name: "Candidate-1",
    party: "Aam Aadmi Party (AAP)",
    age: 33,
    dob: "1989-02-12",
    aadhaar: "123456789115",
    state: "State 1",
    constituency: "Constituency 1",
    vote_count: 810,
  },
  {
    name: "Candidate-2",
    party: "Aam Aadmi Party (AAP)",
    age: 37,
    dob: "1985-09-28",
    aadhaar: "123456789116",
    state: "State 2",
    constituency: "Constituency 2",
    vote_count: 800,
  },
  {
    name: "Candidate-3",
    party: "Aam Aadmi Party (AAP)",
    age: 36,
    dob: "1986-04-05",
    aadhaar: "123456789117",
    state: "State 3",
    constituency: "Constituency 3",
    vote_count: 790,
  },
  {
    name: "Candidate-4",
    party: "Aam Aadmi Party (AAP)",
    age: 34,
    dob: "1988-11-19",
    aadhaar: "123456789118",
    state: "State 4",
    constituency: "Constituency 4",
    vote_count: 780,
  },
  {
    name: "Candidate-5",
    party: "Aam Aadmi Party (AAP)",
    age: 35,
    dob: "1987-06-24",
    aadhaar: "123456789119",
    state: "State 5",
    constituency: "Constituency 5",
    vote_count: 770,
  },
  {
    name: "Candidate-6",
    party: "Aam Aadmi Party (AAP)",
    age: 39,
    dob: "1983-03-17",
    aadhaar: "123456789120",
    state: "State 6",
    constituency: "Constituency 6",
    vote_count: 760,
  },
  {
    name: "Candidate-7",
    party: "Aam Aadmi Party (AAP)",
    age: 38,
    dob: "1984-08-09",
    aadhaar: "123456789121",
    state: "State 7",
    constituency: "Constituency 7",
    vote_count: 750,
  },

  // Samajwadi Janta Party (Samajwadi Janta Party (SP)) candidates
  {
    name: "Candidate-1",
    party: "Samajwadi Janta Party (SP)",
    age: 43,
    dob: "1979-07-02",
    aadhaar: "123456789122",
    state: "State 8",
    constituency: "Constituency 1",
    vote_count: 740,
  },
  {
    name: "Candidate-2",
    party: "Samajwadi Janta Party (SP)",
    age: 47,
    dob: "1975-12-15",
    aadhaar: "123456789123",
    state: "State 9",
    constituency: "Constituency 2",
    vote_count: 730,
  },
  {
    name: "Candidate-3",
    party: "Samajwadi Janta Party (SP)",
    age: 44,
    dob: "1978-03-28",
    aadhaar: "123456789124",
    state: "State 10",
    constituency: "Constituency 3",
    vote_count: 720,
  },
  {
    name: "Candidate-4",
    party: "Samajwadi Janta Party (SP)",
    age: 42,
    dob: "1980-10-09",
    aadhaar: "123456789125",
    state: "State 11",
    constituency: "Constituency 4",
    vote_count: 710,
  },
  {
    name: "Candidate-5",
    party: "Samajwadi Janta Party (SP)",
    age: 40,
    dob: "1982-05-22",
    aadhaar: "123456789126",
    state: "State 12",
    constituency: "Constituency 5",
    vote_count: 700,
  },
  {
    name: "Candidate-6",
    party: "Samajwadi Janta Party (SP)",
    age: 39,
    dob: "1983-12-05",
    aadhaar: "123456789127",
    state: "State 13",
    constituency: "Constituency 6",
    vote_count: 690,
  },
  {
    name: "Candidate-7",
    party: "Samajwadi Janta Party (SP)",
    age: 41,
    dob: "1981-09-18",
    aadhaar: "123456789128",
    state: "State 14",
    constituency: "Constituency 7",
    vote_count: 680,
  },

  // Rastaya Janta Party (RJP) candidates
  {
    name: "Candidate-1",
    party: "Rastaya Janta Party (RJP)",
    age: 35,
    dob: "1987-10-15",
    aadhaar: "123456789129",
    state: "State 15",
    constituency: "Constituency 1",
    vote_count: 670,
  },
  {
    name: "Candidate-2",
    party: "Rastaya Janta Party (RJP)",
    age: 38,
    dob: "1984-05-20",
    aadhaar: "123456789130",
    state: "State 16",
    constituency: "Constituency 2",
    vote_count: 660,
  },
  {
    name: "Candidate-3",
    party: "Rastaya Janta Party (RJP)",
    age: 36,
    dob: "1986-12-25",
    aadhaar: "123456789131",
    state: "State 17",
    constituency: "Constituency 3",
    vote_count: 650,
  },
  {
    name: "Candidate-4",
    party: "Rastaya Janta Party (RJP)",
    age: 37,
    dob: "1985-07-30",
    aadhaar: "123456789132",
    state: "State 18",
    constituency: "Constituency 4",
    vote_count: 640,
  },
  {
    name: "Candidate-5",
    party: "Rastaya Janta Party (RJP)",
    age: 39,
    dob: "1983-02-04",
    aadhaar: "123456789133",
    state: "State 19",
    constituency: "Constituency 5",
    vote_count: 630,
  },
  {
    name: "Candidate-6",
    party: "Rastaya Janta Party (RJP)",
    age: 40,
    dob: "1982-09-09",
    aadhaar: "123456789134",
    state: "State 20",
    constituency: "Constituency 6",
    vote_count: 620,
  },
  {
    name: "Candidate-7",
    party: "Rastaya Janta Party (RJP)",
    age: 42,
    dob: "1980-04-14",
    aadhaar: "123456789135",
    state: "State 21",
    constituency: "Constituency 7",
    vote_count: 610,
  },
];

const CandidateDetails: React.FC = () => {
  return (
    <div>
      <h2>Candidate Details</h2>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            <strong>Name:</strong> {candidate.name}<br />
            <strong>Party:</strong> {candidate.party}<br />
            <strong>Age:</strong> {candidate.age}<br />
            <strong>DOB:</strong> {candidate.dob}<br />
            <strong>Aadhaar:</strong> {candidate.aadhaar}<br />
            <strong>State:</strong> {candidate.state}<br />
            <strong>Constituency:</strong> {candidate.constituency}<br />
            <strong>Vote Count:</strong> {candidate.vote_count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateDetails;


