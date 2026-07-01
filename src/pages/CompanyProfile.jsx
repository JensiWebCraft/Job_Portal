import CompanyHeader from "../components/CompanyProfile/CompanyHeader";
import CompanySidebar from "../components/CompanyProfile/CompanySidebar";
import CompanyInfo from "../components/CompanyProfile/CompanyInfo";
import AboutCompany from "../components/CompanyProfile/AboutCompany";
import SocialLinks from "../components/CompanyProfile/SocialLinks";

export default function CompanyProfile() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <CompanyHeader />

        <section className="mt-8 flex flex-col lg:flex-row gap-8">

          {/* Left Sidebar */}
          <div className="w-full lg:w-4/12">
            <CompanySidebar />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-8/12 space-y-8">

            <CompanyInfo />

            <AboutCompany />

            <SocialLinks />

          </div>

        </section>

      </div>
    </main>
  );
}