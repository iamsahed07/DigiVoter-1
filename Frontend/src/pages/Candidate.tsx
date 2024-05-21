import { useParams } from "react-router-dom";
import CandidateCard from "../components/CandidateCard";
import { data } from "../../public/candidates";
import { IMAGES } from "../assets/party-images/";
import { useState } from "react";

function Candidate() {
  const { id } = useParams();
  const [disableButton,setDisableButton]=useState(false)

  const obj = data.find(({ _id }) => _id.$oid === id);
  const image = IMAGES.find(({ name }) => name === obj?.party);

  function handleSubmit(){
    setDisableButton(true)
  }

  if (obj !== undefined) {
    return (
      <div>

      <div className="w-3/4 h-screen mx-auto flex">
        <CandidateCard
        width="80"
        height ='80'
          className={""}
          url={image?.url}
          candidateName={obj.candidateName}
          party={obj.party}
        />
        <div className="w-60 sm:w-64">
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
                {obj.candidateName}
              </h1>
              <h3 className="text-xs mt-1 text-[#565253] font-semibold">
                {obj.party}
              </h3>
            </div>
          </div>
        </div>
      </div>
            </div>
    );
  } else return <h1>Candidate not found</h1>;
}

export default Candidate;
