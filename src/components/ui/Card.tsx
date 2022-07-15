import classes from './Card.module.css';
import React from 'react';
import Navbar from '../layout/Navbar';

const Card: React.FC<{ children: JSX.Element }> = React.memo((props) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className={classes.main}>{props.children}</div>
    </div>
  );
});

export default Card;
