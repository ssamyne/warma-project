import { Reducer, useReducer } from 'react';
import LanguageContext from './language-context';
import HOME_DEFAULT_CHAT, {
  HOME_TH_CHAT,
  Chat,
} from '../components/home/HOME_DEFAULT_CHAT';
import REPLY_TEXT, { REPLY_TH } from '../components/home/REPLY_TEXT';

const defaultLanguageState = { home: HOME_DEFAULT_CHAT, reply: REPLY_TEXT };

interface State {
  home: Chat[];
  reply: string[];
}

interface Action {
  type: string;
  payload: string;
}

const languageReducer: Reducer<State, Action> = (state, action) => {
  if (action.type === 'CHANGE') {
    if (action.payload === 'TH') {
      return { home: HOME_TH_CHAT, reply: REPLY_TH };
    } else if (action.payload === 'EN') {
      return { home: HOME_DEFAULT_CHAT, reply: REPLY_TEXT };
    }
  }

  return state;
};

const LanguageProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [languageState, dispatchLanguageAction] = useReducer(
    languageReducer,
    defaultLanguageState
  );
  const changeLanguageHandler = (language: string) => {
    dispatchLanguageAction({ type: 'CHANGE', payload: language });
  };

  const languageContext = {
    language: languageState,
    changeLanguage: changeLanguageHandler,
  };

  return (
    <LanguageContext.Provider value={languageContext}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
