import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import OuterLayout from "./components/OuterLayout";
import { InnerLayout } from "./components/InnerLayout";
import { Information } from "./pages/Information";
import { VoterRegistration } from "./pages/VoterRegistration";
import { VotingArea } from "./pages/VotingArea";
import { VotingResult } from "./pages/VotingResult";
import { SignUp } from "./pages/SignUp";
import ElectionLayout from "./components/ElectionLayout";
import Candidate from "./pages/Candidate";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<OuterLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<InnerLayout />}>
        <Route path="information" element={<Information />} />
        <Route path="voter-registration" element={<VoterRegistration />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="voting-area" element={<ElectionLayout />}>
        <Route index element={<VotingArea />} />
        <Route path="candidate/:id" element={<Candidate />} />
        </Route>
        <Route path="voting-result" element={<VotingResult />} />
        {/* <Route path="/logout" element={<Login/>} /> */}      
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="bg-[#EEEEEE]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
