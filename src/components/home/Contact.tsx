import classes from './Contact.module.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.halfContact}>
        <div className={classes.social}>
          <h2>Follow me on</h2>
        </div>
        <div className={classes.social}>
          <a
            href='https://www.facebook.com/klitsana.chooprayoon/'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
          <a
            href='https://www.instagram.com/ssamyne_/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/klitsana/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className={classes.halfContact}>
        <div className={classes.row}>
          <PhoneIphoneIcon />
          <p>085-155-5766</p>
        </div>
        <div className={classes.row}>
          <EmailIcon />
          <p>klitsanac@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
