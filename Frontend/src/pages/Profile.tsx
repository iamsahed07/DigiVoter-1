import React from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full md:w-3/4 md:float-right md:mr-10 h-screen mt-10">
      <Container className="bg-white shadow-2xl p-5 rounded-lg">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqX5-Bk8Cxg5Cam2G8AIwPv2kaNOw8Vm1DKw&usqp=CAU"
            alt="profile"
            className="w-50 h-50"
          ></img>
          <div className="ml-5">
            <p className="text-2xl font-semibold text-gray-800">NAME: TRISAGNI ROY</p>
            <p className="text-lg text-gray-600">Voter ID/ Epic No: WRI123456</p>
            <p className="text-lg text-gray-600">Aadhaar No: 111122223333</p>
            <p className="text-lg text-gray-600">DOB: 12-08-2001</p>
            <p className="text-lg text-gray-600">AGE: 22</p>
            <p className="text-lg text-gray-600">Address: 123, ABC Road, XYZ City, State - West Bengal</p>
          </div>
        </div>
      </Container>
      <div className="flex justify-center mt-10 md:mt-20">
        <button
          className="bg-blue-600 text-white font-bold text-xl md:text-xl p-3 rounded-md shadow-md hover:bg-blue-500 transition duration-300"
          onClick={() => navigate("/voting-area")}
        >
          GO TO VOTING AREA
        </button>
      </div>
    </div>
  );
}
