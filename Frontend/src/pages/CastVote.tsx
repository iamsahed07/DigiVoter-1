import React from 'react';
import { Container } from '../components/Container';

const CastVote = () => {
  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container className="bg-gray-50 col-start-2 col-end-12 mt-1 mb-6 shadow-lg rounded-lg h-full">
        <div className="bg-indigo-500 text-white rounded-t-md shadow-lg">
          <div className="flex justify-center items-center h-12">
            <h1 className="py-2 text-3xl font-bold uppercase">Cast Your Vote</h1>
          </div>
        ?
        </div>
      </Container>
    </div>
  );
};

export default CastVote;
