import { useEffect } from "react";
import ProceedBox from "../components/landingPage/ProceedBox";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Chat - Wordle Cup";
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-300">
      <ProceedBox />
    </div>
  );
};

export default LandingPage;
