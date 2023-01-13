import "./App.css";
import Home from "./components/Home";
import { createContext, useState ,useCallback,useEffect } from "react";
import { dictionary } from "./components/words";

export const WordleContext = createContext();
function App() {
  const [word, setWord] = useState("games");
  const [completedRows, setCompletedRows] = useState([]);
  const [guessWord, setGuessWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char) {
    console.log(char);
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

  // document.addEventListener("keyup",(e)=>{
  //   if(e.key ==="Enter") pressEnter();
  //   else if(e.key ==="Backspace") backspace();  
  //   // console.log(e);
  //   else if(e.which >= 65 && e.which <= 90) guessTheWord(e.key)
  // })
  

  const handleKeyPress = useCallback((event) => {
    if(event.key ==="Enter") pressEnter();
    else if(event.key ==="Backspace") backspace();  
    else if(event.key.match(/^[a-z]$/i)) guessTheWord(event.key)
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <WordleContext.Provider
        value={{
          guessTheWord,
          pressEnter,
          completedRows,
          currentRow,
          word,
          guessWord,
          backspace,
        }}
      >
        <Home />
      </WordleContext.Provider>
    </div>
  );
}

export default App;
