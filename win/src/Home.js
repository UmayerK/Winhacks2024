import React from 'react';
import ParkImage from './park.jpeg';
import winhacksLogo from './winhacksLogo.jpeg';

const WelcomeText = () => {
    return (
      <div className="mt-[350px] ml-16 pr-[800px]">
        <h1 className="text-6xl font-bold text-white">Have you been scammed?</h1>
        <p className="text-lg text-white mt-4">
  In 2022, scams affected 80,000 US seniors, costing them $3.1 billion—an 84% increase from the previous year. Cryptocurrency scams are notably increasing, contributing to nearly $1.1 billion in losses in 2023. With over 333,000 annual reports of elder scams, the urgency for enhanced awareness and protection for seniors' financial security is evident.</p>
      </div>
    );
  }

function Home() {
    return (
        <div>
          <div className="bg-neutral-900 h-[1080px] flex flex-col">
            <WelcomeText />
            <div className="mt-8 ml-8">
                <button className='bg-indigo-600 text-white py-6 px-9 text-xl font-bold rounded-lg md:ml-8 hover:bg-indigo-500 duration-500'>
                    Get Started
                </button>
            </div>
            <img src={ParkImage} alt="Senior Couple in the Park" className="w-[512px] mt-[-330px] ml-[1024px]" />
          </div>
          <div className="h-[700px] bg-neutral-900 flex flex-col justify-center items-center pb-[300px]">
        <img src={winhacksLogo} alt="winhacks logo" className="w-[400px] mr-[800px]" />
        <div className="ml-[800px] mt-[-300px] mr-36">
        <h1 className='text-6xl text-white font-bold'>About Safebook</h1>
        <p className="text-white mt-4 text-lg">Safebook is a social media platform developed by a team of four University of Windsor Computer Science students during WinHacks 2024. It focuses on detecting and preventing online scams through advanced AI algorithms, providing users with a secure online environment. Safebook aims to redefine social media by prioritizing trust and integrity, ensuring a safer experience for all users. </p> 
        </div>
      </div>
        </div>
      );
}

export default Home;