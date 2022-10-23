import Header from "../Header";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  
  const naviate = useNavigate();
  const idToken = useSelector((state) => state.login.idToken);
  const newPasswordInputRef = useRef();

  const submitHandler =  event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCE-lBPmgWMTGc_tN0g7fMxBJzDCTF-AC0";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type' : "application/json"
      }
    }).then(res => {
      if (res.ok) {
        // redirect user to home page
        alert("Password changed!");
        naviate("/", {replace: true});
      }
      
    })

  }

  return (
    <div className="settings-page">
      <Header />
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={submitHandler}>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  row="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="New Password"
                  minLength="6"
                  ref={newPasswordInputRef}
                  
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
