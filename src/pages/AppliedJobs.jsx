import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppliedJobsHeader from "../components/AppliedJobs/AppliedJobsHeader";
import AppliedJobsSearch from "../components/AppliedJobs/AppliedJobsSearch";
import AppliedJobsList from "../components/AppliedJobs/AppliedJobsList";

export default function AppliedJobs() {
  return (
    <>
      
      <main className="bg-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <AppliedJobsHeader />

          <AppliedJobsSearch />

          <AppliedJobsList />

        </div>
      </main>

     
    </>
  );
}