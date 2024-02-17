import React, { useState } from 'react';

function TextBox() {
  const [inputText, setInputText] = useState(""); // State to store input text

  const exportFunction = () => {
    // Function to handle exporting the text
    alert("Works");
    // Replace this alert with your desired functionality
  };

  const handleSubmit = () => {
    // Call the export function
    return 0.5;
    
    exportFunction();
  };

  const handleChange = (event) => {
    // Update the input text state
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      // Call the handleSubmit function if "Enter" is pressed
      handleSubmit();
    }
  };

  return (
    <div className="text-3xl font-bold flex flex-col items-center justify-center mb-[400px]">
      <form className="font-bold flex flex-col items-center relative">
        <textarea 
          id="textbox" 
          name="textbox" 
          className="text-black w-[512px] h-[256px] text-md font-normal resize-none mb-2" // Disable resizing
          value={inputText} 
          onChange={handleChange} // Call handleChange function when the input value changes
          onKeyPress={handleKeyPress} // Call handleKeyPress function when a key is pressed
          placeholder="hello" // Set the default text to "hello"
        />

        <button 
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-5 mr-5"
          onClick={handleSubmit} // Call handleSubmit function when the button is clicked
        >
          Button
        </button>
      </form>
    </div>
  );
}

export default TextBox;
