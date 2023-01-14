import "./App.css";
import Home from "./components/Home";
import { createContext, useState } from "react";
import { dictionary } from "./components/words";

export const WordleContext = createContext();
function App() {
  const [word, setWord] = useState("games");
  const [completedRows, setCompletedRows] = useState([]);
  const [guessWord, setGuessWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char) {
    if (guessWord.length === 5) return;
    setGuessWord(guessWord.concat(char));
  }
  function pressEnter() {
    if (guessWord.toLocaleLowerCase() === word)
      alert("Congratulations you got it");
    if (currentRow >= 5)
      return alert(
        "You have unfortunately exhausted all your trials. Press refresh to try again. "
      );
    if (guessWord.length < 5) return;
    if (!dictionary.includes(guessWord.toLocaleLowerCase())) {
      return alert("Word not found", guessWord);
    }

    setCurrentRow(currentRow + 1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessWord("");
  }

  function backspace() {
    setGuessWord(guessWord.slice(0, guessWord.length - 1));
  }

  return (
    <div className="App">
      <WordleContext.Provider
        value={{
          guessTheWord,
          pressEnter,
          backspace,
          completedRows,
          currentRow,
          word,
          guessWord,
        }}
      >
        <Home />
      </WordleContext.Provider>
    </div>
  );
}

export default App;
