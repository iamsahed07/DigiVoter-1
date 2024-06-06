import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import AdminLogin from './pages/AdminLogin'
import AdminDashboard  from './pages/AdminDashboard'
import ElectionManagement  from './pages/ElectionManagement'
import CandidateManagement  from './pages/CandidateManagement'
import VoterManagement  from './pages/VoterManagement'
import ResultsAnalytic  from './pages/ResultsAnalytics'
import OuterLayout from "./components/OuterLayout";
import { InnerLayout } from "./components/InnerLayout";
import { InnerLayoutAdmin } from './components/InnerLayoutAdmin'
import { Information } from "./pages/Information";
import { VoterRegistration } from "./pages/VoterRegistration";
import { VotingArea } from "./pages/VotingArea";
import { VotingResult } from "./pages/VotingResult";
import ElectionLayout from "./components/ElectionLayout";
import Candidate from "./pages/Candidate";
import Profile from "./pages/Profile";
import HomeVoter from "./pages/HomeVoter";
import AddElection from "./components/AddElection";
import AddCandidate from "./components/AddCandidate";
import AddVoter from "./components/AddVoter";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<OuterLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      
        <Route path="login" element={<Login />} />

      <Route element={<InnerLayout />}>
        <Route path="home" element={<HomeVoter />} />
        <Route path="information" element={<Information />} />
        <Route path="voter-registration" element={<VoterRegistration />} />
        <Route path="profile" element={<Profile />} />
        <Route path="voting-area" element={<ElectionLayout />}>
          <Route index element={<VotingArea />} />
          <Route
            path="candidate/:CandidateId/:ElectionId/:CanAsAssemblyId"
            element={<Candidate />}
          />
        </Route>
        <Route path="voting-result" element={<VotingResult />} />
        
      </Route>
     
      {/* Admin Routes */}
      <Route element={<InnerLayoutAdmin />}>
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="election-management" element={<ElectionManagement />} />
        <Route path="add-election" element={<AddElection />} />
        <Route path="candidate-management" element={<CandidateManagement />} />
        <Route path="add-candidate" element={<AddCandidate/>} />
        <Route path="voter-management" element={<VoterManagement />} />
        <Route path="add-voter" element={<AddVoter />} />
        <Route path="results-analytics" element={<ResultsAnalytic />} />
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
