import React from 'react';
import Form from './Textbox.js'; // Importing the Form component
import Posts from './Posts'; 
import './styles.css';
import Button from './Button';
import Nav from './Nav.js'
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black min-h-screen flex flex-col">
      {/* Nav component rendered outside the gradient container */}
      <Nav />
      
      {/* Apply the gradient background to the content container */}
      <div className="flex-1 text-white text-center">
        {/* Content */}
        <section className="flex flex-col items-center justify-center h-full">
          <Form setPosts={setPosts}/>
          <Posts posts={posts} setPosts={setPosts}/>
        </section>
      </div>
    </div>
  );
}

export default App;
