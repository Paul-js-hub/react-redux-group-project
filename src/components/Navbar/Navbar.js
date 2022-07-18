import { NavLink } from 'react-router-dom';
import style from './navbar.module.css';
// import logo from '../../img/logo.png'

const Navbar = () => (
  <nav className={style.topNav}>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/missions">Missions</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
  </nav>
);

export default Navbar;
