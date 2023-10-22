// InputBox.js
import React from 'react';

function InputBox({ value, onChange, size_row=4, size_col =30, id}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <textarea
        inputProps={{style: {fontSize: 140}}}
        id={id}
        value={value}
        onChange={handleChange}
        rows={size_row}
        cols={size_col}
      />
    </div>
  );
}

export default InputBox;
