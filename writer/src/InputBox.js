// InputBox.js
import React from 'react';

function InputBox({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <textarea
        // placeholder="Type something..."
        value={value}
        onChange={handleChange}
        rows={4}
        cols={30}
      />
    </div>
  );
}

export default InputBox;
