import DashboardHeader from "../components/EmployerDashboard/DashboardHeader";
import DashboardStats from "../components/EmployerDashboard/DashboardStats";
import RecentJobs from "../components/EmployerDashboard/RecentJobs";

export default function EmployerDashboard() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <DashboardHeader />

        <DashboardStats />

        <RecentJobs />

      </div>
    </main>
  );
}