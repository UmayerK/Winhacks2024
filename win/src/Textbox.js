import React, { useState } from 'react';


function TextBox() {
  const [inputText, setInputText] = useState(""); // State to store input text

  const exportFunction = () => {
    // Function to handle exporting the text
    alert("Works");
    // Replace this console.log with your desired functionality
  };

  const handleSubmit = () => {
    // Call the export function
    exportFunction();
  };

  return (
    <div className="text-3xl font-bold flex flex-col items-center justify-center mt-[100px] ">
      <form className="font-bold flex flex-col items-center">
        <label htmlFor="textbox" className="mb-2 font-bold">Enter your text:</label>
        <input 
          type="text" 
          id="textbox" 
          name="textbox" 
          className=" text-black w-[512px] h-[256px] text-md font-normal "  
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} // Update input text state
        />
        <button 
          type="button" // Use type="button" to prevent form submission
          onClick={handleSubmit} // Call handleSubmit function on button click
          className="font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TextBox;
