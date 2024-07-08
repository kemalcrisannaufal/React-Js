import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <AuthLayout title={"Register"} type="register">
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
