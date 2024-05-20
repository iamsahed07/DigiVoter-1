import { useNavigate } from "react-router-dom";
import { Container } from "../components/Container";

export const VoterRegistration = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-3/4 float-right mr-10">
      <Container
        className={
          " bg-white col-start-2 col-end-10 mt-1 mb-6 shadow-2xl pb-5 pr-1 h-1/4"
        }
      >
        <div className="bg-[#00C3D9] mx-5 text-center text-[#72F5FD] rounded-b-md shadow-lg h-9">
          <h1 className="text-lg ">RESGISTRATION</h1>
        </div>
        <div className="mt-5 ml-8 grid-cols-5 flex-col ">
          <input
            className="outline-none border-b-2 border-c"
            name="voterId"
            placeholder="Enter your voterId or Epic No"
          ></input>
          <hr></hr>
          <p className="text-xl font-bold">Enter your Voter Id/ Epic No.</p>
          <input></input>
          <div className="flex justify-center">
            <button
              className="bg-[#00BDDA] text-white rounded px-8 py-2.5 mt-5"
              onClick={() => navigate("/profile")}
            >
              REGISTER
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
