import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.route} className="nav-link">
        {props.text}
      </Link>
    </li>
  );
};

export default NavLink;
