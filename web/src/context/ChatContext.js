import { createContext, useContext, useEffect, useState } from "react";
import { Socket } from "../socket/connect";

const ChatRoomContext = createContext();

const ChatRoomProvider = ({ children }) => {
  const [typedMessages, setTypedMessages] = useState("");
  const [messages, setMessages] = useState([]);


  const sendMessage = (message) => {
    Socket.emit("chat_message", message);
  };

  const receiveMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
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
