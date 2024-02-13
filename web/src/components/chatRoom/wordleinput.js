import { useEffect, useRef, useState } from "react";

const WordleInputBox = ({ index, activeWordleInput, setActiveWordleInput }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (activeWordleInput === index) {
      inputRef.current.focus();
    }
  }, [activeWordleInput]);

  return (
    <input
      type="text"
      className="w-full h-full border-2 outline-none border-slate-500 rounded bg-slate-100 text-xl font-bold text-center uppercase"
      maxLength={1}
      disabled={activeWordleInput !== index ? true : false}
      // onChange={setActiveWordleInput((prev) => prev+1)}
      value={input}
      ref={inputRef}
      onChange={(e) => {
        setInput(e.target.value);
        if (activeWordleInput < 29) {
          setActiveWordleInput((prev) => prev + 1);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && activeWordleInput > 0) {
          setInput("");
          setActiveWordleInput((prev) => prev - 1);
        }
      }}
    />
  );
};

export default WordleInputBox;
