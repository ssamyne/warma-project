import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = React.memo(() => {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBrand}>
        <NavLink to='/'>Warma</NavLink>
      </div>
      <div className={classes.navLang}>
        <button>EN/TH</button>
      </div>
    </div>
  );
});

export default Navbar;
