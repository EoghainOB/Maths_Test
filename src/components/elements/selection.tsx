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

  const begin = () => {
    let newRandomNumber1 =
      difficulty === "easy" && type === "division"
        ? Math.floor(Math.random() * 100) + 1
        : difficulty === "easy"
        ? Math.floor(Math.random() * 10) + 1
        : difficulty === "medium" && type === "division"
        ? Math.floor(Math.random() * 900) + 101
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
      while (newRandomNumber2 === newRandomNumber1 || newRandomNumber2 === 1) {
        newRandomNumber2 =
          difficulty === "easy"
            ? Math.floor(Math.random() * 10) + 1
            : Math.floor(Math.random() * 90) + 11;
      }
      const factor = Math.floor(Math.random() * 10) + 1;
      newRandomNumber1 = newRandomNumber2 * factor;
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
    <div className="content">
      <div className="operatorBtns">
        <label>Math Type</label>
        <br />
        <button
          value="addition"
          name="mathtype"
          className={type === "addition" ? "selected" : ""}
          onClick={handleTypeChange}
        >
          Addition
        </button>
        <button
          value="subtraction"
          name="mathtype"
          className={type === "subtraction" ? "selected" : ""}
          onClick={handleTypeChange}
        >
          Subtraction
        </button>
        <button
          value="division"
          name="mathtype"
          className={type === "division" ? "selected" : ""}
          onClick={handleTypeChange}
        >
          Division
        </button>
        <button
          value="multiplication"
          name="mathtype"
          className={type === "multiplication" ? "selected" : ""}
          onClick={handleTypeChange}
        >
          Multiplication
        </button>
      </div>
      <div className="difficultyBtns">
        <label>Difficulty</label>
        <br />
        <button
          value="easy"
          name="difficulty"
          className={difficulty === "easy" ? "selected" : ""}
          onClick={handleDifficultyChange}
        >
          Easy
        </button>
        <button
          value="medium"
          name="difficulty"
          className={difficulty === "medium" ? "selected" : ""}
          onClick={handleDifficultyChange}
        >
          Medium
        </button>
        <button
          value="hard"
          name="difficulty"
          className={difficulty === "hard" ? "selected" : ""}
          onClick={handleDifficultyChange}
        >
          Hard
        </button>
      </div>
      <div className="startBtn">
        <button onClick={begin}>Start</button>
      </div>
      <div>
        <Maths
          number1={number1}
          operator={math}
          number2={number2}
          onResult={handleResult}
        />
      </div>
    </div>
  );
};

export default Selection;
