import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";

export default function Signup() {
  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Join thousands of job seekers."
    >
     <SignupForm />
    </AuthLayout>
  );
}