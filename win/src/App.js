import React from 'react';
import Form from './Textbox.js'; // Importing the Form component
import Posts from './Posts'; 
import Nav from './Nav.js'
import Home from './Home.js'
import { useState } from 'react';

// Import the background image
import backgroundImage from './bg.jpg';

function App() {
  const [posts, setPosts] = useState([]);
  const [homePage, setHomePage] = useState(true);
  
  return (
    // Set the background image using inline CSS
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Nav homePage={homePage} setHomePage={setHomePage} />
      { homePage ? (<Home/>) : (
      <div className="flex-1 text-white text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <Form setPosts={setPosts}/>
          <Posts posts={posts} setPosts={setPosts}/>
        </div>
      </div>)
      }
    </div>
  );
}

export default App;
