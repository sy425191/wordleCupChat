import { useContext, useEffect, useState } from "react";
import ChatMessage from "../components/chatRoom/chatMessage";
import ChatRoomDetails from "../components/chatRoom/chatRoomDetails";
import WordlePlayerBarComponent from "../components/chatRoom/chatSidebar";
import ChatTypeBox from "../components/chatRoom/chatTypeBox";
import { ChatRoomContext } from "../context/ChatContext";
import { Socket, SocketContext } from "../socket/connect";

const ChatRoom = () => {
  const chatContext = useContext(ChatRoomContext);
  const socketContext = useContext(SocketContext);

  useEffect(() => {
    Socket.on("chat_message", (message) => {
      chatContext.receiveMessage(message);
    });

  }, []);

  return (
    <div className="w-full h-screen flex py-2 px-2 bg-slate-300">
      <div className="flex-1 flex flex-col px-3">
        <ChatRoomDetails />
        <div className="flex-1 py-2 px-2 overflow-y-auto py-3 my-2">
          {chatContext.messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <ChatTypeBox />
      </div>
      <WordlePlayerBarComponent />
    </div>
  );
};

export default ChatRoom;
