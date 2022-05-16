import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          My blog
        </Link>

        <ul className="nav navbar-nav pull-xs-right">
          <NavLink text="Home" route="/" />
          <NavLink text="New Article" route="/editor" />
          <NavLink text="Settings" route="/settings" />
          <NavLink text="Sign in" route="/login" />
          <NavLink text="Sign up" route="/register" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
