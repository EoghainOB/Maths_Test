import React, { useState, useEffect } from "react";

const Maths = (props: any) => {
  const [result, setResult] = useState<number | null>(null);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [completeSum, setCompleteSum] = useState(0);

  const calculateSum = () => {
    if (num1 !== null && num2 !== null && operator !== "") {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
        default:
          return 0;
      }
    }
    return 0;
  };

  useEffect(() => {
    setNum1(props.number1);
    setNum2(props.number2);
    setOperator(props.operator);
  }, [props.number1, props.number2, props.operator]);

  useEffect(() => {
    const calculatedSum = calculateSum();
    setCompleteSum(calculatedSum);
  }, [num1, num2, operator]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(Number(e.target.value));
  };

  const submitResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = completeSum === result;
    props.onResult(isCorrect);
    isCorrect ? setResult(null) : setResult(result);
  };

  return (
    <div className="submitResult">
      {num1 !== 0 && (
        <>
          <p className="maths">
            {num1}
            {operator}
            {num2}
          </p>
          <form onSubmit={submitResult}>
            <input
              type="number"
              id="result"
              value={result === null || result === 0 ? "" : result}
              onChange={handleInputChange}
            />
            <button>Submit Answer</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Maths;
