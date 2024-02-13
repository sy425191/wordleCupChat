import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Socket } from "../socket/connect";

const ChatRoomContext = createContext();

const ChatRoomProvider = ({ children }) => {
  const [typedMessages, setTypedMessages] = useState("");
  const [messages, setMessages] = useState([]);
  const chatRoomRef = useRef();

  const sendMessage = (message) => {
    Socket.emit("chat_message", message);
  };

  const receiveMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop =
        chatRoomRef.current.scrollHeight - chatRoomRef.current.clientHeight;
    }
  }, [messages]);

  return (
    <ChatRoomContext.Provider
      value={{
        typedMessages,
        setTypedMessages,
        messages,
        sendMessage,
        receiveMessage,
        chatRoomRef,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};

export { ChatRoomContext, ChatRoomProvider };
