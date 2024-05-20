import CandidateCard from "../components/CandidateCard.tsx";
import { Container } from "../components/Container";
import { data } from "../../public/candidates";
import { useNavigate } from "react-router-dom";

export const VotingArea = () => {
  const navigate = useNavigate();

  function handleNavigation(id) {
    navigate(`candidate/${id}`);
  }

  return (
    <div className="flex flex-col w-3/4 float-right mr-10 h-screen">
      <Container className="pb-12 mt-5">
        <div className="px-5 py-2 mx-auto bg-white rounded-lg shadow-sm w-fit">
          <h3 className="text-sm font-bold ">CANDIDATES</h3>
        </div>
        <div className="flex flex-wrap w-[80%] sm:w-2/3 mx-auto justify-evenly gap-x-7 gap-y-10 mt-10 ">
          {data.map(({ _id, candidateName, party }) => (
            <button key={_id.$oid} onClick={() => handleNavigation(_id.$oid)}>
              <CandidateCard
                width={"44"}
                className={"h-44 w-44"}
                url={`./src/assets/party-images/${party}.png`}
                candidateName={candidateName}
                party={party}
              />
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};
