import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
        <InputForm 
          type={"email"}
          name={"email"}
          placeholder={"example@gmail.com"}
          label = "Email"
          />
        <InputForm 
          type={"password"}
          name={"password"}
          placeholder={"********"}
          label = "Password"
        />
        <div className="mb-3">
          <Button classname="bg-blue-600 w-full">Login</Button>
        </div>
      </form>
    );
}

export default FormLogin;