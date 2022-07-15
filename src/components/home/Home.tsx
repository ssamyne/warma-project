import React, { useState, useRef, useEffect } from 'react';
import useScrollToBottom from '../../hooks/useScrollToBottom';
import useAutosizeTextArea from '../../hooks/useAutoSizeTextArea';
import useHttp, { defaultStatus } from '../../hooks/useHttp';
import { addContext } from '../../lib/api';
import HOME_DEFAULT_CHAT from './HOME_DEFAULT_CHAT';
import REPLY_TEXT from './REPLY_TEXT';

import classes from './Home.module.css';
import TextArea from './TextArea';
import { Button } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import HomeChatBox from './HomeChatBox';
import Contact from './Contact';

const Home = React.memo(() => {
  const [chatArray, setChatArray] = useState(HOME_DEFAULT_CHAT);
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
          content:
            'I think something went wrong. Please try again after some time.',
        },
      ]);
    }

    if (status === defaultStatus.completed) {
      setChatArray([
        ...chatArray,
        {
          box: classes.boxLeft,
          content: 'Thank you for sharing this with me.',
        },
      ]);
      setTextInput('');
    }
  }, [status, setChatArray]);

  const onSendHandler = () => {
    const inValidInput = textInput.trim() === '';

    if (inValidInput) {
      const index = Math.floor(Math.random() * 3);

      setChatArray([
        ...chatArray,
        { box: classes.boxLeft, content: REPLY_TEXT[index] },
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
            <h1>Hm ... Empty?</h1>
          </div>
        )}
        <Contact />
      </div>
      <div className={classes.mainContent}>
        {chatArray.map((chat, index) => {
          return (
            <HomeChatBox key={index} box={chat.box} content={chat.content} />
          );
        })}
        <div ref={chatEndRef}></div>
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
