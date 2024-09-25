import React, { useState } from 'react';

function Calc() {  // Changed name to Calc to match your file
  // Declare a state variable for the output
  const [output, setOutput] = useState(0);

  // Function to handle increment/decrement
  const handleClick = (value) => {
    setOutput(output + value);
  };

  // Function to reset the output to 0
  const handleClear = () => {
    setOutput(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Output: {output}</h2>
      <div>
        {/* Buttons to increment or decrement the output */}
        <button onClick={() => handleClick(1)}>+1</button>
        <button onClick={() => handleClick(2)}>+2</button>
        <button onClick={() => handleClick(3)}>+3</button>
        <button onClick={() => handleClick(-1)}>-1</button>
        <button onClick={() => handleClick(-2)}>-2</button>
        <button onClick={() => handleClick(-3)}>-3</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calc;  // Export as Calc to match your file
n