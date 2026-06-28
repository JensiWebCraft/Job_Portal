import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import JobHeader from "../components/JobDetails/JobHeader";
import JobOverview from "../components/JobDetails/JobOverview";
import JobDescription from "../components/JobDetails/JobDescription";
import Responsibilities from "../components/JobDetails/Responsibilities";
import Requirements from "../components/JobDetails/Requirements";
import Skills from "../components/JobDetails/Skills";
import Benefits from "../components/JobDetails/Benefits";
import CompanyInfo from "../components/JobDetails/CompanyInfo";
import ApplyCard from "../components/JobDetails/ApplyCard";
import SimilarJobs from "../components/JobDetails/SimilarJobs";

export default function JobDetails() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-6 py-8">

          {/* Job Header */}
          <JobHeader />

          {/* Main Content */}
          <section className="mt-8 flex flex-col lg:flex-row gap-8">

            {/* Left Side */}
            <div className="w-full lg:w-8/12 space-y-8">

              <JobOverview />

              <JobDescription />

              <Responsibilities />

              <Requirements />

              <Skills />

              <Benefits />

              <CompanyInfo />

            </div>

            {/* Right Side */}
            <aside className="w-full lg:w-4/12">

              <ApplyCard />

            </aside>

          </section>

          {/* Similar Jobs */}
          <section className="mt-12">

            <SimilarJobs />

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}