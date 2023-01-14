import React, { useState ,useEffect ,useContext } from "react";
import { WordleContext } from "../../App";

const Cell = ({ id, rowId }) => {
  const [alphabet, setAlphabet] = useState("");
  const [completed, setCompleted] = useState(true);
  const [colors, setColors] = useState({ back: "white", font: "#5691c8" });
  const { guessWord, word, currentRow, completedRows } = useContext(WordleContext);

  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };

  useEffect(() => {
    if (currentRow === rowId) {
      setAlphabet(guessWord[id]);
    }
    if (completedRows.includes(rowId) && completed) {
      changeColors();
      setCompleted(false);
    }
  }, [guessWord, completedRows]);

  function changeColors() {
    const arr = word.split("");
    if (arr.includes(alphabet.toLocaleLowerCase())) {
      if (arr[id] === alphabet.toLocaleLowerCase()) {
        return setColors({ back: "lightgreen", font: "white" });
      }
      return setColors({ back: "gold", font: "white" });
    }
    return setColors({ back: "grey", font: "white" });
  }

  return (
    <div
      style={style}
      className="m-[2px] my-[2px] flex h-[62px] w-[62px] items-center justify-center border-2"
    >
      <p className="mb-2 flex self-center text-5xl font-bold">{alphabet}</p>
    </div>
  );
};

export default Cell;
