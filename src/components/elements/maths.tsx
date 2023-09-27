import React, { useState, useEffect } from "react";

const Maths = (props: any) => {
  const [result, setResult] = useState<number | null>(null);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [completeSum, setCompleteSum] = useState(0);
  const [mathsClass, setMathsClass] = useState("maths");
  const [transitionClass, setTransitionClass] = useState("");

  const calculateSum = () => {
    if (num1 !== null && num2 !== null && operator !== "") {
      switch (operator) {
        case "+":
          return num1 + num2;
        case "−":
          return num1 - num2;
        case "×":
          return num1 * num2;
        case "÷":
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
    setMathsClass(isCorrect ? "mathsCorrect" : "mathsIncorrect");
    setTransitionClass("fade-out");
    setTimeout(() => {
      setMathsClass("maths");
      setTransitionClass("");
    }, 1000);
    isCorrect ? setResult(null) : setResult(result);
  };

  return (
    <>
      {completeSum !== 0 && (
        <div className={`submitResult ${transitionClass}`}>
          {num1 !== 0 && (
            <>
              <div className={mathsClass}>
                <h3>
                  {num1} {operator} {num2}
                </h3>
              </div>
              <div className="inputForm">
                <h3>=</h3>
                <form onSubmit={submitResult}>
                  <input
                    type="number"
                    placeholder="Enter Answer"
                    id="result"
                    value={result === null || result === 0 ? "" : result}
                    onChange={handleInputChange}
                  />
                  <button>Submit Answer</button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Maths;
