import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import PersonalInfo from "../components/Profile/PersonalInfo";
import SkillsCard from "../components/Profile/SkillsCard";
import EducationCard from "../components/Profile/EducationCard";
import ExperienceCard from "../components/Profile/ExperienceCard";
import ResumeCard from "../components/Profile/ResumeCard";
import ActivityCard from "../components/Profile/ActivityCard";

export default function Profile() {
  return (
    <>
     

      <main className="bg-slate-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <ProfileHeader />

         <section className="mt-8 flex flex-col lg:flex-row gap-8">

  <div className="w-full lg:w-4/12">
    <ProfileSidebar />
  </div>

  <div className="w-full lg:w-8/12 space-y-8">
    <PersonalInfo />
    <SkillsCard />
    <EducationCard />
    <ExperienceCard />
    <ResumeCard />
  </div>

</section>

<div className="mt-10">
  <ActivityCard />
</div>

        </div>

      </main>

      
    </>
  );
}