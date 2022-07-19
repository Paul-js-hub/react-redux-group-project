import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions">Missions</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
  </nav>
);

export default Navbar;
