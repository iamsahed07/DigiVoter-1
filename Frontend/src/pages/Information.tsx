import React from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

export const Information = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col w-3/4 float-right mr-10 mt-10">
      <Container
        className={"bg-white col-start-2 col-end-12 mt-1 mb-6 shadow-2xl"}
      >
        <div className="bg-blue-500 mx-5 text-center text-white rounded-b-md shadow-lg h-9">
          <h1 className="py-1 text-lg">User Manual</h1>
        </div>
        <div className="px-5 text-gray-600">
          <h3 className="mt-3 text-center">Welcome</h3>
          <h3 className="mb-3 text-center">
            These are few Guidelines for user :
          </h3>
          <h2 className="text-lg font-semibold">1. Voter Registration</h2>
          <div className="mx-8 my-3 text-sm">
            <li className="my-1">
              For casting the vote user needs to first register himself. For
              this registration purpose, the user will be provided a voter
              registration form on this website.
            </li>
            <li className="my-1">
              The voter can only register in the registration phase. After the
              registration phase is over, the user cannot register and thus will
              not be able to vote.
            </li>
            <li className="my-1">
              For registration, the user will have to enter his Aadhar card
              number and Epic No. (Voter Id No.) which the user will be using
              for voting purpose.
            </li>
            <li className="my-1">
              At the first stage, the data record will be checked. If the user
              is found in the Voter Database, then an OTP will be sent to the
              registered Aadhaar linked mobile number.
            </li>
            <li className="my-1">
              The second stage is OTP verification. This stage is required to
              validate the voter itself. After entering the Aadhaar number and
              successful age verification.
            </li>
            <li className="my-1">
              After entering the correct OTP, the user will get successfully
              registered.
            </li>
          </div>
          <h2 className="text-lg font-semibold">2. Voting Process</h2>
          <div className="mx-8 my-3 text-sm">
            <li className="mb-3">
              Overall, the voting process is divided into three phases. All of
              which will be initialized and terminated by the admin. Users have
              to participate in the process according to the current phase.
            </li>
            <ol className="list-decimal">
              <li className="my-1">
                <span className="font-bold">Registration Phase:</span> During
                this phase, the registration of the users (who are going to cast
                the vote) will be carried out.
              </li>
              <li className="my-1">
                <span className="font-bold">Voting Phase:</span> After
                initialization of voting phase from the admin, users can cast
                the vote in the voting section. The casting of the vote can be
                simply done by clicking on the “Cast your VOTE” button, after
                which the transaction will be initiated and after confirming the
                transaction, the vote will be successfully casted. After the
                voting phase is over, users will not be able to cast the vote.
              </li>
              <li className="my-1">
                <span className="font-bold">Result Phase:</span> This is the
                final stage of the whole voting process during which the results
                of the election will be displayed at the “Result” section.
              </li>
            </ol>
          </div>
        </div>
        <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white rounded px-8 py-2.5 m-5 hover:bg-blue-500"
              onClick={() => navigate("/voter-registration")}
            >
              PROCEED
            </button>
          </div>
      </Container>
    </div>
  );
};
