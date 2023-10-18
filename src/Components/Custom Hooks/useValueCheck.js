import { useState } from "react";

const useValueCheck = ({ setBoardValue }) => {
  const [RedPlaying, setRedPlaying] = useState(false);
  const [PlayerScore, setPlayerScore] = useState({
    Red: 0,
    Blue: 0,
  });

  const [GameEnd, setGameEnd] = useState(false);

  const RandomCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function CheckPlayerConditions(BoxValue) {
    for (let i = 0; i < RandomCheck.length; i++) {
      const [x, y, z] = RandomCheck[i];
      if (
        BoxValue[x] &&
        BoxValue[x] === BoxValue[y] &&
        BoxValue[y] === BoxValue[z]
      ) {
        setGameEnd(true);
        return BoxValue[x];
      }
    }
  }

  function ResetValue() {
    setGameEnd(false);
    setBoardValue(Array(9).fill(null));
  }

  return {
    RedPlaying,
    setRedPlaying,
    CheckPlayerConditions,
    GameEnd,
    PlayerScore,
    setPlayerScore,
    ResetValue,
  };
};

export default useValueCheck;
