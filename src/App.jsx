import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs";
import EmployerDashboard from "./pages/EmployerDashboard";
import CompanyProfile from "./pages/CompanyProfile";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>

      {/* Pages with Navbar & Footer */}
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/saved-jobs" element={<SavedJobs />} />

        <Route path="/applied-jobs" element={<AppliedJobs />} />

      <Route
  path="/employer/dashboard"
  element={<EmployerDashboard />}
/>
        
<Route
  path="/employer/company-profile"
  element={<CompanyProfile />}
/>
      </Route>

      {/* Authentication Pages (No Navbar) */}
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/reset-password" element={<ResetPassword />} />

    </Routes>
  );
}

export default App;