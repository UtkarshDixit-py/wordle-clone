import React, { useContext , useEffect,useRef} from "react";
import { WordleContext } from "../../App";


const Key = (props) => {
 
  const { guessTheWord, backspace, pressEnter } = useContext(WordleContext);

  function handleClickForBig() {
    if (props.alphabet == "Enter") {
      console.log("enter");
      pressEnter();
    } else {
      backspace();
    }
  }

  if (props.big) {
    return (
      <button
        onClick={() => handleClickForBig()}
        style={{
          width: 65,
          height: 58,
          margin: 3,
          borderRadius: 3,
          display: "grid",
          placeItems: "center",
          fontSize: 15,
          backgroundColor: "#d3d6da",
          color: "black",
          fontFamily: "Arial",
          cursor: "pointer",
          border: 0,
          fontWeight: "bold",
        }}
      >
        {props.alphabet}
      </button>
    );
  }
  return (
    <button
      onClick={() => guessTheWord(props.alphabet)}
      style={{
        width: 43,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        backgroundColor: "#d3d6da",
        color: "black",
        fontFamily: "Arial",
        cursor: "pointer",
        border: 0,
        fontWeight: "bold",
      }}
    >
      {props.alphabet}
    </button>
  );
};

export default Key;
