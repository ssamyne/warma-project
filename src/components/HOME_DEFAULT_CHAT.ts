import classes from '../pages/Home.module.css';

const HOME_DEFAULT_CHAT = [
  { box: classes.boxLeft, content: 'Hello!!' },
  { box: classes.boxLeft, content: 'Welcome to Warma.' },
  { box: classes.boxRight, content: 'What is Warma anyway?' },
  {
    box: classes.boxLeft,
    content: 'Warma is a website for sharing your thought about Warma creater.',
  },
  {
    box: classes.boxRight,
    content:
      'So, What is the difference between talk to you in person and in Warma?',
  },
  {
    box: classes.boxLeft,
    content:
      'Hmm. The differnce is Warma can make you feel more comfortable to talk about me as an anonymous.',
  },
  {
    box: classes.boxRight,
    content: "That's cool",
  },
  {
    box: classes.boxLeft,
    content:
      'So, Feel free to share what you think about me or my work or just share about your life.',
  },
];

export default HOME_DEFAULT_CHAT;
