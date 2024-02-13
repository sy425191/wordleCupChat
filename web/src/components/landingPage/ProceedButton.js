const ProceedButton = ({ onCLick }) => {
  return (
    <div
      className="w-1/2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-center text-white text-md font-bold uppercase py-2 rounded-lg mt-4 cursor-pointer
        hover:from-yellow-700 hover:to-yellow-600 duration-300"
      onClick={onCLick}
    >
      Proceed to Chat
    </div>
  );
};

export default ProceedButton;
