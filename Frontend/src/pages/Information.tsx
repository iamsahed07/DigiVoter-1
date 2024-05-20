import { Container } from "../components/Container";

export const Information = () => {
  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10">
      <Container
        className={" bg-white col-start-2 col-end-12 mt-1 mb-6 shadow-2xl"}
      >
        <div className="bg-[#00C3D9] mx-5 text-center text-[#72F5FD] rounded-b-md shadow-lg h-9">
          <h1 className="text-lg ">User Manual</h1>
        </div>
        <div className="px-5 text-[#969696]">
          <h3 className="mt-3 text-center ">Welcome</h3>
          <h3 className="mb-3 text-center">
            These are few Guidelines for user :
          </h3>
          <h2 className="text-lg font-semibold">1. Voter Registration </h2>
          <div className="mx-8 my-3 text-sm">
            <li className="my-1 ">
              For casting the vote user needs to first register himself. For
              this registration purpose , the user will be provided a voter
              registration form on this website.
            </li>
            <li className="my-1 ">
              The voter can only register in the registration phase. After the
              registration phase is over the user cannot register and thus will
              not be able to vote.
            </li>
            <li className="my-1 ">
              For registration , the user will have to enter his Aadhar card
              number and Epic No. (Voter Id No.) which the user will be using
              for voting purpose.
            </li>
            <li className="my-1 ">
              At the first stage the data record will be checked. If the user is
              found in the Voter Database , then an OTP will be sent to the
              register Aadhaar linked mobile number.
            </li>
            <li className="my-1 ">
              The second stage is OTP verification. This stage is required to
              validate the voter itself. After entering the Aadhaar number and
              successful age verification.
            </li>
            <li className="my-1 ">
              After entering correct OTP user will get successfully registered.
            </li>
          </div>
          <h2 className="text-lg font-semibold">2. Voting Process</h2>
          <div className="mx-8 my-3 text-sm ">
            <li className="mb-3">
              Overall , the voting process is divided into three phases. All of
              which will be initialized and terminated by the admin.User have to
              participate in the process according to current phase.
            </li>
            <ol className="list-decimal ">
              <li className="my-1">
                <span className="font-bold ">Registration Phase:</span>
                During this phase the registration of the users (who are going
                to cast the vote) will be carried out.
              </li>
              <li className="my-1">
                <span className="font-bold ">Voting Phase:</span>
                After initialization of voting phase from the admin, user can
                cast the vote in voting section. The casting of vote can be
                simply done by clicking on “Cast your VOTE” button, after which
                transaction will be initiated and after confirming transaction
                the vote will be successfully casted. After the voting phase is
                over user will not be able to cast vote
              </li>
              <li className="my-1">
                <span className="font-bold ">Result Phase:</span>
                This is the final stage of the whole voting process during which
                the results of election will be displayed at “Result” section.
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  );
};
