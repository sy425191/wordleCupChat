import { createContext, useState } from "react";

const ChatRoomContext = createContext();

const ChatRoomProvider = ({ children }) => {
  const [typedMessages, setTypedMessages] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const receiveMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <ChatRoomContext.Provider
      value={{
        typedMessages,
        setTypedMessages,
        messages,
        sendMessage,
        receiveMessage,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export { ChatRoomContext, ChatRoomProvider };
