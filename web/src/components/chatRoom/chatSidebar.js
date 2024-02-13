import WordleInputBox from "./wordleinput";

const WordlePlayerBarComponent = () => {
  return (
    <div className="hidden md:flex flex-col justify-evenly items-center w-1/3 h-full rounded-xl p-3 bg-slate-400">
      <div className="min-w-64 w-1/2 h-72 p-1 border-4 border-slate-700 grid grid-cols-5 rounded-lg bg-slate-100">
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />

        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />

        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />

        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />

        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />

        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
        <WordleInputBox />
      </div>

      <div className="text-xl uppercase text-slate-800 w-2/3 text-center font-semibold">
        Wordle Player Implementation Here
      </div>
    </div>
  );
};

export default WordlePlayerBarComponent;
