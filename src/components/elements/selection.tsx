import { useState } from "react";
import Maths from "./maths";

const Selection = () => {
  const [type, setType] = useState("addition");
  const [difficulty, setDifficulty] = useState("easy");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [math, setMath] = useState("");

  const handleResult = (isCorrect: boolean) => {
    if (isCorrect) {
      begin();
    }
  };

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const handleDifficultyChange = (e: any) => {
    setDifficulty(e.target.value);
  };
  console.log("Diff", difficulty, type);

  const begin = () => {
    let newRandomNumber1 =
      difficulty === "easy" && type === "division"
        ? Math.floor(Math.random() * 100) + 1
        : difficulty === "easy"
        ? Math.floor(Math.random() * 10) + 1
        : difficulty === "medium"
        ? Math.floor(Math.random() * 90) + 11
        : Math.floor(Math.random() * 900) + 101;

    let newRandomNumber2 =
      difficulty === "easy"
        ? Math.floor(Math.random() * 10) + 1
        : difficulty === "medium"
        ? Math.floor(Math.random() * 90) + 11
        : Math.floor(Math.random() * 900) + 101;

    if (type === "subtraction" && newRandomNumber1 < newRandomNumber2) {
      [newRandomNumber1, newRandomNumber2] = [
        newRandomNumber2,
        newRandomNumber1,
      ];
    }

    if (type === "division") {
      while (
        newRandomNumber2 === newRandomNumber1 ||
        newRandomNumber1 % newRandomNumber2 !== 0
      ) {
        newRandomNumber2 =
          difficulty === "easy"
            ? Math.floor(Math.random() * 10) + 1
            : difficulty === "medium"
            ? Math.floor(Math.random() * 90) + 11
            : Math.floor(Math.random() * 900) + 101;
      }
    }

    setNumber1(newRandomNumber1);
    setNumber2(newRandomNumber2);

    setMath(
      type === "addition"
        ? "+"
        : type === "subtraction"
        ? "-"
        : type === "division"
        ? "/"
        : "*"
    );
  };

  return (
    <>
      <div>
        <label>Math Type</label>
        <br />
        <button value="addition" name="mathtype" onClick={handleTypeChange}>
          Addition
        </button>
        <button value="subtraction" name="mathtype" onClick={handleTypeChange}>
          Subtraction
        </button>
        <button value="division" name="mathtype" onClick={handleTypeChange}>
          Division
        </button>
        <button
          value="multiplication"
          name="mathtype"
          onClick={handleTypeChange}
        >
          Multiplication
        </button>
      </div>
      <div>
        <label>Difficulty</label>
        <br />
        <button value="easy" name="difficulty" onClick={handleDifficultyChange}>
          Easy
        </button>
        <button
          value="medium"
          name="difficulty"
          onClick={handleDifficultyChange}
        >
          Medium
        </button>
        <button value="hard" name="difficulty" onClick={handleDifficultyChange}>
          Hard
        </button>
      </div>
      <button onClick={begin}>Start</button>
      <Maths
        number1={number1}
        operator={math}
        number2={number2}
        onResult={handleResult}
      />
    </>
  );
};

export default Selection;
