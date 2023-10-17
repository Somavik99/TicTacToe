import { useState } from "react";
import Box from "../Box/Box";
import useValueCheck from "../Custom Hooks/useValueCheck";
import { IoIosRefresh } from "react-icons/io";
import ScoreBord from "../ScoreBoard/ScoreBord";
import "./Board.css";

const Board = () => {
  const [BoardValue, setBoardValue] = useState(Array(9).fill(null));

  const {
    RedPlaying,
    setRedPlaying,
    CheckPlayerConditions,
    GameEnd,
    PlayerScore,
    setPlayerScore,
    ResetValue,
  } = useValueCheck({ setBoardValue: setBoardValue });

  function BoardBoxClick(ValIndex) {
    const UpdateBoardValue = BoardValue.map((val, i) => {
      if (i === ValIndex) {
        return RedPlaying === true ? "X" : "O";
      } else {
        return val;
      }
    });

    setBoardValue(UpdateBoardValue);

    const WinningTeam = CheckPlayerConditions(UpdateBoardValue);

    if (WinningTeam) {
      if (WinningTeam === "O") {
        let { Blue } = PlayerScore;
        Blue += 1;
        setPlayerScore((score) => {
          return {
            ...score,
            Blue,
          };
        });
      } else {
        let { Red } = PlayerScore;
        Red += 1;
        setPlayerScore((score) => {
          return {
            ...score,
            Red,
          };
        });
      }
    }

    console.log(PlayerScore);

    setRedPlaying(!RedPlaying);
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <ScoreBord PlayerScore={PlayerScore} RedPlaying={RedPlaying} />
        <div className="grid items-center justify-center grid-cols-3 h-[22vw] w-[22vw] ml-16 mt-[3%] ">
          {BoardValue.map((B, index) => {
            return (
              <Box
                Boards={B}
                key={index}
                onBoxClick={
                  !GameEnd
                    ? () => B === null && BoardBoxClick(index)
                    : ResetValue
                }
              />
            );
          })}
        </div>
        <button
          onClick={ResetValue}
          className="btn mt-[5%] w-[80px] h-[80px] border-[4px] border-black focus:border-blue-700 rounded-[50%] bg-cyan-700"
        >
          <IoIosRefresh className=" m-auto font-bolder text-[30px]" />
        </button>
      </div>
    </>
  );
};

export default Board;
