/* eslint-disable import/no-named-default */
import { NavLink } from 'react-router-dom';
import { default as BootstrapNavbar } from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../img/logo.png';
import style from './navbar.module.css';

const Navbar = () => (
  <BootstrapNavbar fixed="top" bg="white" variant="light" className={style.navContainer} expand="lg">
    <Container fluid>
      <BootstrapNavbar.Brand href="#home" className="me-auto">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <h3 className="d-inline">React Bootstrap</h3>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse className={style.linkContainer}>
        <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/">Rockets</NavLink>
        <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/missions">Missions</NavLink>
        <div className="vr mx-3" />
        <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/profile">My Profile</NavLink>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);

export default Navbar;
