import React, { useState } from 'react';
import getRating from './api';

function TextBox({setPosts}) {
  const [inputText, setInputText] = useState(""); // State to store input text

  const handleSubmit = () => {
    if (inputText === "") return; // Don't submit if the input is empty
    getRating(inputText, setPosts); // Call the getRating function from the API file (api.js)
  };

  return (
    <div className="text-3xl font-bold flex flex-col justify-center absolute top-0 left-0 right-0 mt-4">
      <form className="font-bold flex flex-col items-center relative">
        <textarea 
          id="textbox" 
          name="textbox" 
          className="text-black w-[512px] h-[256px] text-2xl font-normal resize-none mt-32 rounded-lg p-4"
          onChange={(event) => {setInputText(event.target.value)}} // Call handleChange function when the input value changes
          onKeyDown={(event) => {event.key === 'Enter' && event.ctrlKey && handleSubmit()}}
          placeholder="What's on your mind?" // Set the default text to "hello"
          maxLength={128}
        />

        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-4 border-blue-700 hover:border-blue-500 rounded-lg"
          onClick={(event) => {event.preventDefault(); handleSubmit()}} // Call handleSubmit function when the button is clicked
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default TextBox;
