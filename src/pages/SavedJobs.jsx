import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SavedJobsHeader from "../components/SavedJobs/SavedJobsHeader";
import SavedJobsSearch from "../components/SavedJobs/SavedJobsSearch";
import SavedJobsList from "../components/SavedJobs/SavedJobsList";

export default function SavedJobs() {
  return (
    <>
      

      <main className="bg-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <SavedJobsHeader />

          <SavedJobsSearch />

          <SavedJobsList />

        </div>
      </main>

     
    </>
  );
}