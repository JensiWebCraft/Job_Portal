import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue your career journey."
    >
      <LoginForm />
    </AuthLayout>
  );
}