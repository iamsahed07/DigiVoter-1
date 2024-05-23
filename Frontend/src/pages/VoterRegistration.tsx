import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import client from "../api/client";
import { getAuthState, updateProfile } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";


export const VoterRegistration = () => {
  const userInfo = useSelector(getAuthState);
  const [epicNo,setEpicNo] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResister = ()=>{
    if(userInfo.profile?.voterId === epicNo){
      alert("registration successfull")
      navigate("/profile");
    }else{
      alert("Invalid Epic No!!");
    }
  }
  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem("token");
      const { data } = await client.get("/auth/getUser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatch(updateProfile(data.profile));
    };
    getUserInfo();
  },[]);
  return (
    <div className="flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container className="bg-white col-start-2 col-end-10 mt-1 mb-6 shadow-2xl pb-5 pr-1 h-1/4">
        <div className="bg-blue-500 mx-5 text-center text-white rounded-b-md shadow-lg h-9">
          <h1 className="py-1 text-lg">REGISTRATION</h1>
        </div>
        <div className="mt-5 ml-8 grid-cols-10 flex-col ">
          <input
            className="outline-none border-b-2 border-gray-300"
            name="voterId"
            value={epicNo}
            onChange={(e) => {
              setEpicNo(e.target.value);
            }}
            placeholder="Enter your voterId or Epic No"
          ></input>
          <hr />
          <p className="text-xl font-bold">Enter your Voter Id/ Epic No.</p>
          <input></input>
          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white rounded px-8 py-2.5 mt-5 hover:bg-blue-500"
              onClick={handleResister}
            >
              REGISTER
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
