import { Container } from "./Container";

function CandidateCard({ className = "", url="", candidateName="", party="",width="44",height='44'}) {
  return (
    <Container  width={width}>
      <div className={`mb-1 h-${width} h-${height}`}>
        <img
          src={url}
          className={`object-cover mb-1 bg-white shadow-lg ${className} rounded-2xl`}
        />
      </div>

      <div className="flex items-center justify-center h-12 mt-1 mb-2 bg-white shadow-md rounded-2xl ">
        <div className=" w-[60%] text-clip text-left">
          <h5 className="text-sm font-bold text-black uppercase">
            {candidateName}
          </h5>
        </div>
        <p className="text-sm font-bold text-gray-400">{party}</p>
      </div>
    </Container>
  );
}

export default CandidateCard;
