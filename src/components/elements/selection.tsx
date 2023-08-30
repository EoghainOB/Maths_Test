import React, { useState } from "react";

const Selection = () => {
  const [type, setType] = useState("addition");
  const [difficulty, setDifficulty] = useState("easy");

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const handleDifficultyChange = (e: any) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <div>
        <label>Math Type</label>
        <br />
        <input
          type="radio"
          value="addition"
          name="mathtype"
          checked={type === "addition"}
          onChange={handleTypeChange}
        />
        Addition
        <input
          type="radio"
          value="subtraction"
          name="mathtype"
          checked={type === "subtraction"}
          onChange={handleTypeChange}
        />
        Subtraction
        <input
          type="radio"
          value="division"
          name="mathtype"
          checked={type === "division"}
          onChange={handleTypeChange}
        />
        Division
        <input
          type="radio"
          value="multiplication"
          name="mathtype"
          checked={type === "multiplication"}
          onChange={handleTypeChange}
        />
        Multiplication
      </div>
      <div>
        <label>Difficulty</label>
        <br />
        <input
          type="radio"
          value="easy"
          name="difficulty"
          checked={difficulty === "easy"}
          onChange={handleDifficultyChange}
        />
        Easy
        <input
          type="radio"
          value="medium"
          name="difficulty"
          checked={difficulty === "medium"}
          onChange={handleDifficultyChange}
        />
        Medium
        <input
          type="radio"
          value="hard"
          name="difficulty"
          checked={difficulty === "hard"}
          onChange={handleDifficultyChange}
        />
        Hard
      </div>
    </>
  );
};

export default Selection;
