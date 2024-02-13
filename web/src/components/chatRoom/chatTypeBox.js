import { useContext } from "react";
import { ChatRoomContext } from "../../context/ChatContext";
import { Socket, SocketContext } from "../../socket/connect";

const ChatTypeBox = () => {
  const chatContext = useContext(ChatRoomContext);
  const socketContext = useContext(SocketContext);

  const submitMessage = () => {
    if (chatContext.typedMessages.trim() !== "") {
      chatContext.setTypedMessages("");
      chatContext.sendMessage({
        text: chatContext.typedMessages,
        socketID: Socket.id,
        time: new Date().toLocaleTimeString(),
        name: socketContext.userName,
      });
    }
  };
  return (
    <div className="w-full h-16 px-3 py-2 flex gap-x-2 rounded-lg bg-slate-400">
      <input
        className="w-[80%] rounded-lg bg-slate-50 px-2 font-semibold outline-none text-slate-800"
        placeholder="type a message!"
        type="text"
        value={chatContext.typedMessages}
        onChange={(e) => chatContext.setTypedMessages(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitMessage();
          }
        }}
      />

      <button className="rounded-xl bg-slate-600 px-3 font-semibold text-slate-50 hover:bg-slate-700 duration-300">
        🙂
      </button>

      <button
        className="flex-1 rounded-xl bg-yellow-600 px-3 font-semibold text-slate-50 hover:bg-yellow-700 duration-300"
        onClick={submitMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatTypeBox;
