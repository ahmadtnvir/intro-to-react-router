import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <h2>Welcome to my website!</h2>
        <NavLink to={'/menu'}>Menu</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
