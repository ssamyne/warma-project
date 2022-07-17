import React, { useState, useRef, useEffect, useContext } from 'react';
import useScrollToBottom from '../../hooks/useScrollToBottom';
import useAutosizeTextArea from '../../hooks/useAutoSizeTextArea';
import useHttp, { defaultStatus } from '../../hooks/useHttp';
import { addContext } from '../../lib/api';
import { Chat } from '../../store/HOME_DEFAULT_CHAT';
import LanguageContext from '../../store/language-context';

import classes from './Home.module.css';
import TextArea from './TextArea';
import { Button } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import HomeChatBox from './HomeChatBox';
import Contact from './Contact';

const Home = React.memo(() => {
  const homeCtx = useContext(LanguageContext);
  const homeLanguage = homeCtx.language.home;
  const replyChat = homeCtx.language.reply;
  const [chatArray, setChatArray] = useState<Chat[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [textInput, setTextInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showEmpty, setShowEmpty] = useState(false);

  const { sendRequest, status } = useHttp(addContext);

  useScrollToBottom(chatEndRef.current, chatArray);
  useAutosizeTextArea(textAreaRef.current, textInput);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target?.value;

    setTextInput(input);
  };

  useEffect(() => {
    if (status === defaultStatus.pending) {
      setChatArray([
        ...chatArray,
        { box: classes.boxRight, content: textInput },
      ]);
    }

    if (status === defaultStatus.error) {
      setChatArray([
        ...chatArray,
        {
          box: classes.boxLeft,
          content: replyChat[5],
        },
      ]);
    }

    if (status === defaultStatus.completed) {
      setChatArray([
        ...chatArray,
        {
          box: classes.boxLeft,
          content: replyChat[3],
        },
      ]);
      setTextInput('');
    }
  }, [status]);

  const onSendHandler = () => {
    const inValidInput = textInput.trim() === '';

    if (inValidInput) {
      const index = Math.floor(Math.random() * 3);

      setChatArray([
        ...chatArray,
        { box: classes.boxLeft, content: replyChat[index] },
      ]);

      setShowEmpty(true);
      return;
    }

    setShowEmpty(false);
    sendRequest(textInput);
  };

  return (
    <div className={classes.homeMain}>
      <div className={classes.background}>
        {showEmpty && (
          <div className={classes.boxRight}>
            <h1>{replyChat[4]}</h1>
          </div>
        )}
        <Contact />
      </div>
      <div className={classes.mainContent}>
        {homeLanguage.map((chat, index) => {
          return (
            <HomeChatBox key={index} box={chat.box} content={chat.content} />
          );
        })}
        {chatArray.map((chat, index) => {
          return (
            <div key={index}>
              <HomeChatBox box={chat.box} content={chat.content} />
              <div ref={chatEndRef}></div>
            </div>
          );
        })}
        <div className={classes.toShare}>
          <TextArea
            onChange={onChangeHandler}
            textAreaRef={textAreaRef}
            textInput={textInput}
          />
          <Button
            onClick={onSendHandler}
            variant='contained'
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Home;
