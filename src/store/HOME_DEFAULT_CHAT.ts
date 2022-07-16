import classes from '../components/home/Home.module.css';

export interface Chat {
  box: string;
  content: string;
}

const HOME_DEFAULT_CHAT: Chat[] = [
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

export const HOME_TH_CHAT = [
  { box: classes.boxLeft, content: 'สวัสดี' },
  { box: classes.boxLeft, content: 'ยินดีต้อนรับสู่เว็บไซต์ "ว่ามา"' },
  { box: classes.boxRight, content: 'ว่ามา คืออะไร?' },
  {
    box: classes.boxLeft,
    content:
      'ว่ามาเป็นเว็บไซต์สำหรับรับฟังความเห็นของคุณ ที่มีต่อเจ้าของเว็บไซต์',
  },
  {
    box: classes.boxRight,
    content: 'แล้วมันต่างกันยังไงกับการพูดกับคุณโดยตรง',
  },
  {
    box: classes.boxLeft,
    content:
      'ความต่างก็คงจะเป็น บนเว็บไซต์นี้คุณสามารถพูดถึงผมได้อย่างสบายใจ โดยที่ผมจะไม่รู้ว่าคุณคือใคร',
  },
  {
    box: classes.boxRight,
    content: 'ก็ดีนะ',
  },
  {
    box: classes.boxLeft,
    content:
      'แบ้งปันความคิดเห็นกับผมหน่อยนะคับ คิดยังไง เกี่ยวกับบุคลิค, ผลงาน หรือ อยากจะเล่าเรื่องราวในชีวิตให้ผมฟังก็ได้ ^-^',
  },
];

export default HOME_DEFAULT_CHAT;
