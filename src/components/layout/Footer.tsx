import React from 'react';

import classes from './Footer.module.css';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Footer: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerHalf}>
        <button id='contact' onClick={onClick}>
          My Contact
        </button>
      </div>
      <div className={classes.footerHalf}>
        <button id='about' onClick={onClick}>
          About Warma
        </button>
      </div>
    </div>
  );
};

export default Footer;
