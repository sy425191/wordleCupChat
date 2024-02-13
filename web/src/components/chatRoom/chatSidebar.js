import { useState } from "react";
import WordleInputBox from "./wordleinput";

const WordlePlayerBarComponent = () => {
  const [activeWordleInput, setActiveWordleInput] = useState(0);

  const wordleInputBoxes = Array(30)
    .fill(0)
    .map((_, i) => <WordleInputBox key={i} />);
  return (
    <div className="hidden md:flex flex-col justify-evenly items-center w-1/3 h-full rounded-xl p-3 bg-slate-400">
      <div className="min-w-64 w-1/2 h-72 p-1 border-4 border-slate-700 grid grid-cols-5 rounded-lg bg-slate-100">
        {wordleInputBoxes.map((box, index) => (
          <WordleInputBox key={index} index={index} activeWordleInput={activeWordleInput} setActiveWordleInput={setActiveWordleInput} />
        ))}
      </div>

      <div className="text-xl uppercase text-slate-800 w-2/3 text-center font-semibold">
        Wordle Player Implementation Here
      </div>
    </div>
  );
};

export default WordlePlayerBarComponent;
