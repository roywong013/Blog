import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginActions } from "../store/slice/login";
import NavLink from "./NavLink";

const Header = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (!isLogin) {
      dispatch(loginActions.login());
    } else {
      dispatch(loginActions.logout());
    }
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My blog
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <NavLink text="Home" route="/" />
          {isLogin && <NavLink text="New Article" route="/editor" />}
          {isLogin && <NavLink text="Settings" route="/settings" />}
          {!isLogin && <NavLink text="Sign in" route="/login" />}
          {!isLogin && <NavLink text="Sign up" route="/register" />}
          {isLogin && <NavLink text="Profile" route="/profile" />}
          <button onClick={loginHandler}>Log</button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
