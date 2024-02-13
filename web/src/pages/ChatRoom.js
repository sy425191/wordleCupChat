import { useContext, useState } from "react";
import ChatMessage from "../components/chatRoom/chatMessage";
import ChatRoomDetails from "../components/chatRoom/chatRoomDetails";
import WordlePlayerBarComponent from "../components/chatRoom/chatSidebar";
import ChatTypeBox from "../components/chatRoom/chatTypeBox";
import { ChatRoomContext } from "../context/ChatContext";

const ChatRoom = () => {
  const chatContext = useContext(ChatRoomContext);

  return (
    <div className="w-full h-screen flex py-2 px-2 bg-slate-300">
      <div className="flex-1 flex flex-col px-3">
        <ChatRoomDetails />
        <div className="flex-1 py-2 px-2 overflow-y-auto py-3 my-2">
          <ChatMessage message={{ text: "Hello", type: "sent", uid: "123" }} />
          <ChatMessage
            message={{ text: "Hello", type: "received", uid: "123" }}
          />
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
