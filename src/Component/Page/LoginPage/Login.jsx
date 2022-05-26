import { Link } from "react-router-dom";
import Header from "../../Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="auth-page">
      <Header />
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <ul className="error-messages">
              {false && <li>Email or password is invalid</li>}
            </ul>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
