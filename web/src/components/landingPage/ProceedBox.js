import ProceedButton from "./ProceedButton";

const ProceedBox = () => {
  return (
    <div className="relative w-full md:w-96 rounded-lg h-full md:h-1/2">
      <div className="absolute w-full h-full bg-yellow-500 opacity-50 rounded-lg rotate-12 z-10"></div>

      <div className="absolute w-full h-full bg-slate-50 z-20 flex flex-col items-center justify-evenly">
        <div className="absolute top-0 right-0 p-2 bg-slate-700 text-white text-xs font-bold rounded-bl-lg">
          v1.0
        </div>
        <div className="absolute top-0 left-0 p-2 bg-slate-700 text-white text-xs font-bold rounded-br-lg">
          8 People Online
        </div>
        <img
          src="/landingIcon.png"
          className="size-20 bg-slate-200 border-2 border-slate-700 rounded-full"
          alt="WordleCupChat ICON"
        />
        <div className="text-2xl text-slate-700 font-bold uppercase">
          WordleCupChat
        </div>

        <div className="flex flex-col items-center text-slate-500 font-monospace text-xs w-3/4 px-2 py-2 border-2 border-slate-400 rounded text-center px-4">
          <span>
            WordleCupChat is a chat application that allows you to chat while
            playing Wordle.
          </span>
          <div className="py-2">
            <a
              href="https://twitter.com/WordleCup"
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <span className="text-yellow-700 font-bold hover:underline">
                Follow us on Twitter
              </span>
            </a>
            <a
              href="https://wordlecup.io/"
              target="_blank"
              rel="noreferrer"
              className="mr-2 font-semibold"
            >
              <span className="text-yellow-600 hover:underline">
                Play Wordle
              </span>
            </a>
          </div>
        </div>

        <ProceedButton />
      </div>
    </div>
  );
};

export default ProceedBox;
