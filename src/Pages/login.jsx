import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <AuthLayout title={"Login"} type="login">
        <FormLogin/>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
