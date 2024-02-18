import React from 'react';

const Nav = ({ homePage, setHomePage }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl flex items-center text-gray-800'>
          <button onClick={() => {homePage ? scrollToTop() : setHomePage(true)}}>Safebook</button>
        </div>
        <ul className='md:flex md:items-center md:pb-0 pb-12'>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <button onClick={() => {homePage ? scrollToTop() : setHomePage(true)}} className='text-gray-800 hover:text-gray-400 duration-500'>Home</button>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <button onClick={() => {homePage ? scrollToBottom() : setHomePage(true)}} className='text-gray-800 hover:text-gray-400 duration-500'>About</button>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <button onClick={() => setHomePage(false)} className='text-gray-800 hover:text-gray-400 duration-500'>Posts</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
