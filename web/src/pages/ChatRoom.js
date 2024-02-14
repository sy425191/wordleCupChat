import { useContext, useEffect } from "react";
import ChatMessage from "../components/chatRoom/chatMessage";
import ChatRoomDetails from "../components/chatRoom/chatRoomDetails";
import WordlePlayerBarComponent from "../components/chatRoom/chatSidebar";
import ChatTypeBox from "../components/chatRoom/chatTypeBox";
import { ChatRoomContext } from "../context/ChatContext";
import { Socket } from "../socket/connect";

const ChatRoomPage = () => {
  const chatContext = useContext(ChatRoomContext);

  useEffect(() => {
    Socket.on("chat_message", (message) => {
      chatContext.receiveMessage(message);
    });

    return () => {
      Socket.off("chat_message");
    };
  }, []);

  return (
    <div className="w-full h-screen flex py-2 px-2 bg-slate-300">
      <div className="flex-1 flex flex-col px-3">
        <ChatRoomDetails />
        <div
          className="flex-1 py-2 px-2 overflow-y-auto py-3 my-2"
          ref={chatContext.chatRoomRef}
        >
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

export default ChatRoomPage;
