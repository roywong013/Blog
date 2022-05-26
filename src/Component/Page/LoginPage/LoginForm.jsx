import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch({ type: "LOGIN" });
  };
  return (
    <form>
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
          placeholder="Password"
        />
      </fieldset>

      <button
        onClick={loginHandler}
        className="btn btn-lg btn-primary pull-xs-right"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
