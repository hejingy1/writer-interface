import React, { useState } from 'react';
import InputBox from './InputBox';

function ParentInput() {
  const [inputData, setInputData] = useState(['', '', '']);
  const [order, setOrder] = useState([]);

  const handleInputChange = (index, value) => {
    const updatedData = [...inputData];
    updatedData[index] = value;
    setInputData(updatedData);
  };

  const handleAddToOrder = () => {
    const newOrder = [...order];
    newOrder.push(inputData.join(' ')); // Combine the input values
    setOrder(newOrder);
    setInputData(['', '', '']); // Clear the input values
  };

  return (
    <div>
      {inputData.map((value, index) => (
        <InputBox
          key={index}
          value={value}
          onChange={(newValue) => handleInputChange(index, newValue)}
        />
      ))}
      <button onClick={handleAddToOrder}>Add to Order</button>
      <h2>Order of Input Data:</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParentInput;
