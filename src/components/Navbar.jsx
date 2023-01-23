import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            {/* el objeto data tiene la propiedad isActive */}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">about</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/users">users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
