import { useContext } from "react";
import { SocketContext } from "../../socket/connect";
import { Link } from "react-router-dom";

const ChatRoomDetails = () => {
  const socketContext = useContext(SocketContext);
  return (
    <div className="w-full h-12 px-3 flex items-center gap-x-2 rounded-lg bg-slate-400">
      <Link to={"/"} className="text-2xl font-bold text-slate-800">
        <img
          src={"/landingIcon.png"}
          alt={"Wordle-Cup Dev Team Fun Room"}
          className="w-10 h-10 rounded-full"
        />
      </Link>
      <div className="flex-1 font-semibold text-slate-800 flex flex-col">
        <div>Wordle-Cup Dev Team Fun Room</div>
        <div className="text-xs text-slate-600">
          {socketContext.totalUsers} Members Active
        </div>
      </div>
      <div className="flex gap-x-2">
        <button
          className="rounded-xl border-2 border-slate-300 text-slate-300 px-3 py-1.5 font-semibold hover:bg-slate-600 hover:border-slate-600 duration-300"
          onClick={() => {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen();
            }
          }}
        >
          <i className="fa fa-expand"></i>
        </button>
        <button className="rounded-xl bg-rose-700 px-3 py-1.5 font-semibold text-rose-50 hover:bg-rose-800 duration-300">
          Leave
        </button>
      </div>
    </div>
  );
};

export default ChatRoomDetails;
