import React from 'react';
import Form from './Textbox.js'; // Importing the Form component

function App() {
  return (
    <div className="flex items-center flex-col bg-black ">
      <header className="">
        <h1 className=" text-red-700 text-3xl font-bold mt-20 flex items-center flex-col"> Scammer get Scammed</h1>
        <Form /> 

      </header>
    </div>
  );
}

export default App;
