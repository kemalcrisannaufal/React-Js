import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("login");
    window.location.href = "/products";
  }
    return (
        <form action="" onSubmit={handleLogin}>
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
          <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </div>
      </form>
    );
}

export default FormLogin;