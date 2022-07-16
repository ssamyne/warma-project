import React from 'react';
import { Chat } from '../components/home/HOME_DEFAULT_CHAT';

interface Language {
  language: { home: Chat[]; reply: string[] };
  changeLanguage: (language: string) => void;
}

const LanguageContext = React.createContext<Language>({
  language: { home: [], reply: [] },
  changeLanguage: (language) => {},
});

export default LanguageContext;
