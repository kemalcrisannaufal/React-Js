import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="font-bold text-3xl mb-2 text-blue-600">{title}</h1>
      <p className="font-medium text-gray-600 mb-3">
        Welcome, Please enter your details
      </p>
      {children}

      <Navigation type={type}></Navigation>

      {/* <p className="text-sm mt-5 text-center">
        {type === "login"
          ? "Don't Have an Account?   "
          : "Already have an account?  "}

        {type === "login" && (
          <Link className="text-blue-600 font-bold" to="/register">
            Sign Up
          </Link>
        )}

        {type === "register" && (
          <Link className="text-blue-600 font-bold" to="/login">
            Sign In
          </Link>
        )}
      </p> */}
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
        <p className="text-sm mt-5 text-center">Dont Have an Account? {"   "}
        <Link className="text-blue-600 font-bold" to="/register">
          Sign Up
        </Link>
        </p>
    );
  } else {
    return (
        <p className="text-sm mt-5 text-center">Already Have an Account?  {"   "}
        <Link className="text-blue-600 font-bold" to="/login">
          Sign In
        </Link>
        </p>
    );
  }
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.string,
};

Navigation.propTypes = {
  type: PropTypes.string,
};

export default AuthLayout;
