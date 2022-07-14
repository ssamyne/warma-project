import React, { useState, useRef, useEffect } from 'react';
import useScrollToBottom from '../hooks/useScrollToBottom';
import useAutosizeTextArea from '../hooks/useAutoSizeTextArea';
import useHttp from '../hooks/useHttp';
import { addContext } from '../lib/api';
import HOME_DEFAULT_CHAT from '../components/HOME_DEFAULT_CHAT';

import classes from './Home.module.css';
import TextArea from '../components/TextArea';
import { Button } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import HomeChatBox from '../components/HomeChatBox';

const Home = React.memo(() => {
  const [chatArray, setChatArray] = useState(HOME_DEFAULT_CHAT);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [textInput, setTextInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { sendRequest, status } = useHttp(addContext);

  useScrollToBottom(chatEndRef.current, chatArray);
  useAutosizeTextArea(textAreaRef.current, textInput);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target?.value;

    setTextInput(input);
  };

  useEffect(() => {
    if (status === 'pending') {
      setChatArray([
        ...chatArray,
        { box: classes.boxRight, content: textInput },
      ]);
    }

    if (status === 'error') {
      setChatArray([
        ...chatArray,
        {
          box: classes.boxLeft,
          content:
            'I think something went wrong. Please try again after some time.',
        },
      ]);
    }

    if (status === 'completed') {
      setChatArray([
        ...chatArray,
        {
          box: classes.boxLeft,
          content: 'Thank you for sharing this with me.',
        },
      ]);
      setTextInput('');
    }
  }, [status]);

  const onSendHandler = () => {
    if (textInput.trim() === '') {
      setChatArray([
        ...chatArray,
        { box: classes.boxLeft, content: 'Hey!!, Type something!!' },
      ]);
      return;
    }

    sendRequest(textInput);
  };

  return (
    <div className={classes.homeMain}>
      <div className={classes.background}></div>
      <div className={classes.mainContent}>
        <div className={classes.chatBox}>
          {chatArray.map((chat, index) => {
            return (
              <HomeChatBox key={index} box={chat.box} content={chat.content} />
            );
          })}
          <div ref={chatEndRef}></div>
        </div>
      </div>
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
  );
});

export default Home;