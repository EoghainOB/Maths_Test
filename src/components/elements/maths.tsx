const Maths = (props: any) => {
  const num1 = props.number1;
  const num2 = props.number2;
  const operator = props.operator;

  const submitResult = (e: any) => {
    e.preventDefault();
    console.log("Hello", e.target);
  };

  return (
    <div>
      {num1 !== 0 && (
        <>
          <p>
            {num1}
            {operator}
            {num2}
          </p>
          <form onSubmit={submitResult}>
            <input type="number" id="result" />
            <button>Submit Answer</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Maths;
