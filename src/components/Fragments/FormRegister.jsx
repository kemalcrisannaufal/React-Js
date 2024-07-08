import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm 
          type={"text"}
          name={"fullname"}
          placeholder={"Insert your full name here"}
          label = "Full Name"
          />
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
        <InputForm 
          type={"password"}
          name={"confirmPassword"}
          placeholder={"********"}
          label = "Confirmation Password"
        />
        <div className="mb-3">
          <Button classname="bg-blue-600 w-full">Register</Button>
        </div>
      </form>
    );
}

export default FormRegister;