import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]); // store all results

  const calculate = () => {
    let result = 0;

    if (operation === "Add") {
      result = Number(num1) + Number(num2);
    } else if (operation === "Subtract") {
      result = Number(num1) - Number(num2);
    } else if (operation === "Multiply") {
      result = Number(num1) * Number(num2);
    }

    // add new result to array
    setResults([...results, result]);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select 
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button onClick={calculate}>Perform Action</button>

      <h3>Results:</h3>
      {results.map((r, index) => (
        <p key={index}>{r}</p>
      ))}
    </div>
  );
}

export default Calculator;