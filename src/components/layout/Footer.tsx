import classes from './Footer.module.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerHalf}>
        <h5>My Contact</h5>
        <div className={classes.phone}>
          <p></p>
        </div>
        <div className={classes.mail}></div>
      </div>
      <div className={classes.footerHalf}>
        <h5>About Website</h5>
        <div className={classes.aboutContent}></div>
        <div className={classes.social}></div>
      </div>
    </div>
  );
};

export default Footer;
