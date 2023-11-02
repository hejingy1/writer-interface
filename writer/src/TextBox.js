import React from 'react';
import './TextBox.css';

function TextBox({onChangeOutline, onChangePaper, outline, paper, size_row=10, size_col=30}){
    const handleOutlineChange = (e) => {
        onChangeOutline(e.target.value);
    };

    const handlePaperChange = (e) => {
        onChangePaper(e.target.value);
    };
    return (
    <div>
        <div className="flexbox-container">
        <textarea
        inputProps={{ fontSize: 14 }}
        value={outline}
        onChange={handleOutlineChange}
        rows={size_row}
        cols={size_col}
        />
        <textarea
        inputProps={{ fontSize: 14 }}
        value={paper}
        onChange={handlePaperChange}
        rows={size_row}
        cols={140}
        />
        </div>
        
    </div>
    );
}

export default TextBox