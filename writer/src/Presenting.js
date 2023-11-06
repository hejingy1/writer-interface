import React, { useState } from 'react';
import CircleLoader from './CircleLoader';
import './ParentInput.css';
import axios from "axios";


function Presenting() {
    const [requirementWords, setWords] = useState(0);
    const [requirement, setRequirement] = useState('');
    const [material, setMaterial] = useState('');
    const [text, setText] = useState('');
    const [loadingCond, setLoading] = useState(true);

    const handleMaterialChange = (value) => {
        setMaterial(value.target.value);
    }
    const handleRequirementChange = (value) => {
        setRequirement(value.target.value);
    }
    const handleWordsChange = (value) => {
        const re = /^[0-9\b]+$/;
        if (value.target.value === '' || re.test(value.target.value)) {
            setWords(value.target.value);
        }
    }
    const handleTextChange = (value) => {
        setText(value.target.value);
    }

    const textFeed = {
        "requirement_word": requirementWords,
        "material": material,
        "requirement": requirement
    }

    const handleReturnText = (res) => {
        setLoading(true);
        setText(res.data);
    }

    const handleText = () => {
        setLoading(false);
        axios.put(`${process.env.REACT_APP_API_ROOT}/api/writers`, textFeed)
            .then((res) => handleReturnText(res));
    };


    return (
        <div className="bg-white grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-md p-4 ml-9 col-span-1">
                <form className="p-4">
                    <div>
                        <div className="bg-white text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">字数</div>
                        <input
                            type="text"
                            id="text_words"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={requirementWords}
                            onChange={(value) => handleWordsChange(value)}
                        ></input>
                    </div>
                    <div className="mt-3">
                        <div className="bg-white text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">要求</div>
                        <textarea
                            type="text"
                            id="requirement"
                            className="bg-gray-50 resize-none h-44 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={requirement}
                            onChange={(value) => handleRequirementChange(value)}
                        ></textarea>
                    </div>
                    <div className="mt-3">
                        <div className="bg-white text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">材料</div>
                        <textarea
                            type="text"
                            id="material"
                            className="bg-gray-50 resize-none h-60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={material}
                            onChange={(value) => handleMaterialChange(value)}
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 mt-3 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={handleText}
                    >
                        生成论文
                    </button>
                </form>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 mr-9 col-span-1">
                <form className="p-4">
                    <div className="bg-white text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">文章</div>
                    {loadingCond ? <textarea
                        type="text"
                        id="text"
                        className="bg-gray-50 resize-none h-screen border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={text}
                        onChange={(value) => handleTextChange(value)}
                    ></textarea> :
                        <div
                            className='h-screen w-full bg-gray-50 border border-gray-300 rounded-lg'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CircleLoader />
                        </div>}
                </form>
            </div>
        </div>
    );
}

export default Presenting;