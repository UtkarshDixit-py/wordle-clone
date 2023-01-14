import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { FaBackspace } from "react-icons/fa";
import { WordleContext } from "../../App";

const Keyboard = () => {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { guessTheWord, pressEnter, backspace } = useContext(WordleContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      pressEnter();
    } else if (event.key === "Backspace") {
      backspace();
    } else {
      set1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          guessTheWord(key);
        }
      });
      set2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          guessTheWord(key);
        }
      });
      set3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          guessTheWord(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  function Set1() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
      >
        {set1.map((char, index) => (
          <Key key={index} alphabet={char} />
        ))}
      </div>
    );
  }
  function Set2() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
      >
        {set2.map((char, index) => (
          <Key key={index} alphabet={char} />
        ))}
      </div>
    );
  }
  function Set3() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
        onKeyDown={handleKeyboard}
      >
        <Key big={true} alphabet={"Enter"} />
        {set3.map((char, index) => (
          <Key key={index} alphabet={char} />
        ))}
        <Key big={true} alphabet={<FaBackspace />} />
      </div>
    );
  }

  return (
    <div>
      <Set1 />
      <Set2 />
      <Set3 />
    </div>
  );
};

export default Keyboard;
