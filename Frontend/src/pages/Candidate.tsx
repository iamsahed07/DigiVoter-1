import { useParams } from "react-router-dom";
import CandidateCard from "../components/CandidateCard";
import { IMAGES } from "../assets/party-images/";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCandidateState } from "../store/candidate";
import client from "../api/client";

function Candidate() {
  const { CandidateId,ElectionId,CanAsAssemblyId } = useParams();
  const { profiles } = useSelector(getCandidateState);
  const [disableButton, setDisableButton] = useState(false);

  const candidate = profiles?.find(({ _id }) => _id === CandidateId);
  // console.log(candidate);

  const image = IMAGES.find(({ name }) => name === candidate?.party);

  console.log(CandidateId, ElectionId, CanAsAssemblyId);

  const handleSubmit = () => {
    try{
      const token = localStorage.getItem("token")
      const giveVote = async()=>{
        const { data } = await client.post("/vote/give-vote", {
          candidateId: CandidateId,
          electionId: ElectionId,
          candidatesAsAssemblyId: CanAsAssemblyId,
        },
        {
          headers:{
            Authorization: "Bearer "+ token
          }
        }
      );
        if(data.success){
          alert(data.message);
        }else{
          alert(data.error);
        }
        console.log(data);
        setDisableButton(true);
      }
      giveVote();

    }catch(error){
      console.error(error)
    }
  }

  return (
    <div>
      <div className="w-3/4 h-screen mx-auto flex mt-5">
        <CandidateCard
          className={"h-40"}
          url={image?.url}
          candidateName={candidate?.name}
          party={candidate?.party}
        />
        <div className="w-60 sm:w-64 ml-10 mt-10">
          <button
            onClick={handleSubmit}
            className={`${
              disableButton ? "bg-[#B3ADED]" : "bg-[#4C3EDB]"
            } text-white text-sm py-2 font-medium w-full rounded-md`}
            disabled={disableButton}
          >
            Cast Your Vote
          </button>
          <div className="flex mt-4">
            <div className="w-2/3 text-start">
              <h1 className="text-sm font-bold uppercase">Candidate Name</h1>
              <h3 className="text-xs mt-1 text-[#565253] font-semibold">
                Party
              </h3>
            </div>
            <div className="w-1/3 text-start">
              <h1 className="text-sm font-bold uppercase truncate">
                {candidate?.name}
              </h1>
              <h3 className="text-xs mt-1 text-[#565253] font-semibold">
                {candidate?.party}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // if (obj !== undefined) {
  // } else return <h1>Candidate not found</h1>;
}

export default Candidate;
