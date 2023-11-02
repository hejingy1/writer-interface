import React, { useState, useEffect} from 'react';
import InputBox from './InputBox';
import TextBox from './TextBox';
import './ParentInput.css';
import axios from "axios";


function ParentInput() {
  const [material, setMaterial] = useState('');
  const [requirement, setRequirement] = useState('');
  const [requirementWords, setWords] = useState(0);
  const [outlineData, setOutline] = useState(['', '', '']);
  const [outlineIndex, setOutlineIndex] = useState(0);
  const [outlineSeg, setOutlineSeg] = useState([]);
  const [text, setText] = useState([]);
  // const [outlineWords, setOutlineWords] = useState([]);



  const handleOutlineChange = (index, value) =>{
    const updateOutline = [...outlineData];
    updateOutline[index] = value;
    setOutline(updateOutline);
  }

  const handleReturnOutlineChange = (index, value) => {
    const updatedData = [...outlineSeg];
    updatedData[index] = value;
    setOutlineSeg(updatedData);
  };

  const handleTextChange = (index, value) =>{
    const updateOutline = [...text];
    updateOutline[index] = value;
    setText(updateOutline);
  }

  const handleMaterialChange = (value) =>{
    setMaterial(value);
  }
  const handleRequirementChange = (value) =>{
    setRequirement(value);
  }
  const handleWordsChange = (value) =>{
    setWords(value);
  }

  const outlineFeed = {
    "requirement_word": requirementWords,
    "material": material,
    "requirement": requirement
  }

  const textFeed ={
    "requirement_word": requirementWords,
    "material": material,
    "requirement": requirement,
    "outline": outlineData[outlineIndex]
  }

  const handleReturnOutline = (res) =>{
    setOutline(res.data);
  }

  const handleReturnText = (res) =>{
    console.log(res)
    setOutlineSeg(res.data[0]);
    setText(res.data[1]);
  }

  const handleOnClick = (newIndex) =>{
    setOutlineIndex(newIndex);
  }

  const handleAdd = () => {
    axios.post("http://localhost:8000/api/writers/", outlineFeed)
    .then((res)=>handleReturnOutline(res));
  };

  const handleText = () =>{
    axios.put("http://localhost:8000/api/writers/1/", textFeed)
    .then((res)=>handleReturnText(res));
  }





  useEffect(() => {
    // Update textarea size when the window is resized
    const handleResize = () => {
      // Obtaining each text area by their id
      const a = document.getElementById("assistant");
      const s = document.getElementById("system");
      const u = document.getElementById("user");
      const outline1 = document.getElementById("outline1");
      const outline2 = document.getElementById("outline2");
      const outline3 = document.getElementById("outline3");
      outline1.rows = Math.floor(window.innerHeight/45);
      outline1.cols = Math.floor(window.innerWidth/23);
      outline2.rows = Math.floor(window.innerHeight/45);
      outline2.cols = Math.floor(window.innerWidth/23);
      outline3.rows = Math.floor(window.innerHeight/45);
      outline3.cols = Math.floor(window.innerWidth/23.5);
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
        资料:
        <InputBox
          className="border border-black p-2"
          id={'assistant'}
          value={material}
          onChange={(newValue) => handleMaterialChange(newValue)}
          // left = "150"
          // size_row = "20"
          // size_col = "120"
        />
      </label>
      <div className="flexbox-inside">
        <label>
          论文要求:
        <InputBox
            id={'user'}
            value={requirement}
            onChange={(newValue) => handleRequirementChange(newValue)}
          />
        </label>
        <label>
          论文字数:
          <InputBox
            id={'system'}
            value={requirementWords}
            onChange={(newValue) => handleWordsChange(newValue)}
          />
        </label>
      </div>
      </div>
      <button onClick={handleAdd}>生成大纲</button>
      <div className="flexbox-container">
        <InputBox
          id={'outline1'}
          key={0}
          value={outlineData[0]}
          onChange={(newValue) => handleOutlineChange(0, newValue)}
          onClick={(newIndex) => handleOnClick(0)}
        />
        <InputBox
          id={'outline2'}
          key={1}
          value={outlineData[1]}
          onChange={(newValue) => handleOutlineChange(1, newValue)}
          onClick={(newIndex) => handleOnClick(1)}
        />
        <InputBox
          id={'outline3'}
          key={2}
          value={outlineData[2]}
          onChange={(newValue) => handleOutlineChange(2, newValue)}
          onClick={(newIndex) => handleOnClick(2)}
        />
      </div>
      <button onClick={handleText}>生成论文</button>
      <ul>
        {outlineSeg?.map((item, index) => (
          <TextBox
          key={index}
          onChangeOutline={(newValue) => handleReturnOutlineChange(index, newValue)}
          onChangePaper={(newValue) => handleTextChange(index, newValue)}
          outline={item}
          paper={text[index]}
          />
        ))}
      </ul>
    </div>
  );
}

export default ParentInput;
