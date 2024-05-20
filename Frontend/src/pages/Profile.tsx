import React from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col w-3/4 float-right mr-10 h-screen">
      <Container className={" bg-white shadow-2xl p-5"}>
        <div className="flex">
          <div className="flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqX5-Bk8Cxg5Cam2G8AIwPv2kaNOw8Vm1DKw&usqp=CAU"></img>
            <div className="ml-5">
              <p className="font-bold text-2xl">Epic No: 789012436789 </p>
              <br></br>
              <p className="font-bold text-2xl">Aadhaar No: 129012436745</p>
              <br></br>
              <br></br>
              <p className="font-bold text-2xl">Name: RESHMI REMESH</p>
              <br></br>
              <p className="font-bold text-2xl">DOB: 12-08-2001</p>
            </div>
          </div>
          <div className="pl-5" style={{ paddingLeft: "10rem" }}>
            <p className="font-bold text-2xl">AGE: 22</p>
          </div>
        </div>
      </Container>
      <div className="flex justify-center mt-20">
        <button
          className="bg-[#4C3EDA] text-white font-bold text-2xl p-3 rounded-md"
          onClick={() => navigate("/profile")}
        >
          GO TO VOTING AREA
        </button>
      </div>
    </div>
  );
}
