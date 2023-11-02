// InputBox.js
import React from 'react';

function InputBox({ value, onChange, onClick, id}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <textarea
        className="border border-black p-2"
        inputProps={{ fontSize: 14 }}
        id={id}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}

export default InputBox;
