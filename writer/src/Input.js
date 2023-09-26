import React, { useState } from 'react';

function InputBox() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <textarea
        type="text"
        // placeholder="Enter the provided"
        value={inputValue}
        onChange={handleChange}
        rows={5}
        cols={40}
      />
      {/* <p>{inputValue}</p> */}
    </div>
  );
}

export default InputBox;
