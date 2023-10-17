import "./Box.css";

const Box = ({ Boards, onBoxClick }) => {
  return (
    <div
      className={
        Boards === "X"
          ? "boardX border-2 text-[50px] font-bold border-transparent text-red-500 flex items-center justify-center text-center rounded-xl w-[80px] h-[80px] "
          : "boardO border-2 text-[50px] font-bold border-transparent text-cyan-500 flex items-center justify-center text-center rounded-xl w-[80px] h-[80px] "
      }
      onClick={onBoxClick}
    >
      <div className="m-auto">{Boards}</div>
    </div>
  );
};

export default Box;
