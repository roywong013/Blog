import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3 className="__header__logo">logo</h3>
      <div className="__header__Link">
        <Link to="/">Home</Link>
        <Link to="/SignIn">Sign In</Link>
        <Link to="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
