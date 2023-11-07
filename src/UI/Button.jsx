const Button = ({ onClick, children }) => {
  const StartScreen =
    "mx-auto py-3 px-16 text-3xl cursor-pointer  font-light rounded-2xl border border-white text-center bg-gradient-to-r from-[#0e0124] to-[#22074d] hover:from-[#0000cd] hover:to-[#0000cd] active::from-[#0000cd] active::to-[#0000cd]`}";

  return (
    <button onClick={onClick} className={`${StartScreen}`}>
      {children}
    </button>
  );
};

export default Button;
