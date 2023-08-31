const Maths = (props: any) => {
  const num1 = props.number1;
  const num2 = props.number2;
  const operator = props.operator;

  return (
    <div>
      {num1 !== 0 && (
        <p>
          {num1}
          {operator}
          {num2}
        </p>
      )}
    </div>
  );
};

export default Maths;
