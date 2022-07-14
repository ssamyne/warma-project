import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = React.memo(() => {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBrand}>
        <NavLink to='/'>Warma</NavLink>
      </div>
      <div className={classes.navList}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? classes.active : undefined;
          }}
          to='/about-me'
        >
          about me
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? classes.active : undefined;
          }}
          to='/contact-me'
        >
          contact me
        </NavLink>
      </div>
      <div className={classes.navLang}>
        <button>EN/TH</button>
      </div>
    </div>
  );
});

export default Navbar;
