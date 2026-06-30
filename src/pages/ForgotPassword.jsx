import AuthLayout from "../components/Auth/AuthLayout";
import ForgotPasswordForm from "../components/Auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Don't worry! Enter your registered email address and we'll send you a password reset link."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}