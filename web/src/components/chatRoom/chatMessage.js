const ChatMessage = ({ message }) => {
  const { text, uid, type } = message;

  return (
    <div
      className={`flex items-start gap-2.5 justify-start ${
        type === "sent" && "flex-row-reverse"
      }`}
    >
      <div className="size-10 mt-1 bg-slate-800 rounded-full text-slate-100 flex justify-center items-center font-bold">
        A
      </div>
      <div className={`flex flex-col gap-1 w-full max-w-[320px] 
        ${type === "sent" ? "items-end" : "items-start"}
      `}>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-slate-900">
            Bonnie Green
          </span>
          <span className="text-sm font-normal text-slate-500">11:46</span>
        </div>
        <div
          className={`flex flex-col leading-1.5 p-4 border-slate-200 bg-slate-700 rounded-b-xl ${
            type === "sent" ? "rounded-tl-xl" : "rounded-tr-xl"
          }`}
        >
          <p className="text-sm font-normal text-slate-100">
            {text}
          </p>
        </div>
        {type === "sent" && (
          <span className="text-sm font-normal text-end text-slate-500">
            Delivered <i className="fa fa-check"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
