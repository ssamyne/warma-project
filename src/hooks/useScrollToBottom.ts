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

    chatEndRef.scrollIntoView({ behavior: 'smooth' });

  }, [chatArray]);
};

export default useScrollToBottom;
