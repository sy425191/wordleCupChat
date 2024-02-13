import { Link } from "react-router-dom";

const ProceedButton = () => {
  return (
    <Link
      to="/chat"
      className="w-1/2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-center text-white text-md font-bold uppercase py-2 rounded-lg mt-4 cursor-pointer
        hover:from-yellow-700 hover:to-yellow-600 duration-300"
    >
      Proceed to Chat
      <i className="fa fa-arrow-right ml-2"></i>
    </Link>
  );
};

export default ProceedButton;
