import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../../Header";

const Register = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCE-lBPmgWMTGc_tN0g7fMxBJzDCTF-AC0";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // ... success respone
          console.log("RES OK");
          return res.json;
        } else {
          // ...error
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="auth-page">
      <Header />
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ul className="error-messages">
              {false && <li> That email is already taken</li>}
              {false && <li> Username have already been taken</li>}
            </ul>

            <form onSubmit={submitHandler}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  required
                  ref={nameInputRef}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  required
                  ref={emailInputRef}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                  ref={passwordInputRef}
                />
              </fieldset>
              {!isLoading && (
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Sign up
                </button>
              )}
              {isLoading && <p>Loading...</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
