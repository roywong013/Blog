import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../store/slice/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const idToken = useSelector((state) => state.login.idToken);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCE-lBPmgWMTGc_tN0g7fMxBJzDCTF-AC0";

    const sendData = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setIsLoading(false);
      if (response.ok) {
        return data;
      } else {
        let errorMessage = "Authentication failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    };
    sendData()
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        dispatch(
          loginActions.login({
            token: data.idToken,
            expirationTime: expirationTime.toISOString()
          })
        );
        alert("Login Successful");
        navigate("/", { replace: true });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <form>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="email"
          placeholder="Email"
          ref={emailInputRef}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
      </fieldset>

      {!isLoading && (
        <button
          onClick={loginHandler}
          className="btn btn-lg btn-primary pull-xs-right"
        >
          Sign in
        </button>
      )}
      {isLoading && <p>Loading...</p>}
    </form>
  );
};

export default LoginForm;
