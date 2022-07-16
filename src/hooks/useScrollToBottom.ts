import { useEffect } from 'react';

interface ChatObj {
  box: string;
  content: string;
}

const useScrollToBottom = (
  chatEndRef: HTMLDivElement | null,
  chatArray: ChatObj[]
) => {
  useEffect(() => {
    if (!chatEndRef) {
      return;
    }
    console.log(chatEndRef);

    chatEndRef.scrollIntoView({ behavior: 'smooth' });
  }, [chatEndRef, chatArray]);
};

export default useScrollToBottom;
