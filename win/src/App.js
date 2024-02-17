import React from 'react';
import Form from './Textbox.js'; // Importing the Form component
import Analysus from './Analysis.js'

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-900 to-black flex items-center justify-center">
      {/* Use Tailwind CSS utility classes to set the height to 100vh, apply the gradient, and center the content */}
      <header className="text-white text-center">
        {/* Apply the gradient classes and specify gradient colors */}
       
        <Form /> {/* Rendering the Form component */}
      </header>
    </div>
  );
}

export default App;
