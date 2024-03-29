import React from 'react';
interface ChatBox {
  box: string;
  content: string;
}

const HomeChatBox: React.FC<ChatBox> = ({ box, content }) => {
  return (
    <div className={box}>
      <h1>{content}</h1>
    </div>
  );
};

export default HomeChatBox;
