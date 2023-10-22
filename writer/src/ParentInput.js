import React, { useState, useEffect} from 'react';
import InputBox from './InputBox';
// import './App.css';
import './ParentInput.css';
// import InfoBox from './InfoBox';

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


  useEffect(() => {
    // Update textarea size when the window is resized
    const handleResize = () => {
      // Obtaining each text area by their id
      const a = document.getElementById("assistant");
      const s = document.getElementById("system");
      const u = document.getElementById("user");
      a.rows = Math.floor(window.innerHeight / 30);
      a.cols = Math.floor(window.innerWidth / 12.5); 
      u.rows = Math.floor(window.innerHeight / 60);
      u.cols = Math.floor(window.innerWidth / 20); 
      s.rows = Math.floor(window.innerHeight / 70);
      s.cols = Math.floor(window.innerWidth / 20); 

    };

    // Set initial size
    handleResize();

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flexbox-container">
      <label>
        Assistant:
        <InputBox
          id={'assistant'}
          key={0}
          value={inputData[0]}
          onChange={(newValue) => handleInputChange(0, newValue)}
          left = "150"
          size_row = "20"
          size_col = "120"
        />
      </label>
      <div className="flexbox-inside">
        <label>
          User:
        <InputBox
            id={'user'}
            key={1}
            value={inputData[1]}
            onChange={(newValue) => handleInputChange(1, newValue)}
          />
        </label>
        <label>
          System:
          <InputBox
            id={'system'}
            key={2}
            value={inputData[2]}
            onChange={(newValue) => handleInputChange(2, newValue)}
          />
        </label>
      </div>
      </div>
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
