import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import LanguageContext from '../../store/language-context';

const Navbar = React.memo(() => {
  const [currentLang, setCurrentLang] = useState('TH');
  const languageCtx = useContext(LanguageContext);
  const onClickHandler = () => {
    if (currentLang === 'EN') {
      languageCtx.changeLanguage(currentLang);
      setCurrentLang('TH');
    } else if (currentLang === 'TH') {
      languageCtx.changeLanguage(currentLang);
      setCurrentLang('EN');
    }
  };

  return (
    <div className={classes.navBar}>
      <div className={classes.navBrand}>
        <NavLink to='/'>Warma</NavLink>
      </div>
      <div className={classes.navLang}>
        <button onClick={onClickHandler}>{currentLang}</button>
      </div>
    </div>
  );
});

export default Navbar;
