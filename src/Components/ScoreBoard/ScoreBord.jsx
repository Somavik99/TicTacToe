import "./Score.css"

const ScoreBord = ({ RedPlaying, PlayerScore }) => {
  return (
    <div className="flex justify-center items-center">
    <div className="flex justify-evenly items-center w-[20vw] border-[2px] rounded-lg border-gray-500 mt-[5%]">
      <div
        className={
          !RedPlaying
            ? "Red text-red-500 text-[20px] font-bold "
            : " text-slate-500 text-[20px] font-bold "
        }
      >
        Red: {PlayerScore.Red}
      </div>
      <div
        className={
          RedPlaying
            ? "Blue text-cyan-500 text-[20px] font-bold"
            : "text-slate-500 text-[20px] font-bold "
        }
      >
        Blue:{PlayerScore.Blue}
      </div>
    </div>
    </div>
  );
};

export default ScoreBord;
