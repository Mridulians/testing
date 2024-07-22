/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Logo from "./Bmail_Logo.png";
import Ham from "./Ham.webp";
import Data from "./Data.js";
import { useState } from "react";
import Left from "./Left.png";
import Right from "./Right.png";
// import Ai from "./Bmail_Ai.png";
// import Second from "./Second.png";
import Img1 from "./Email campaign-amico.png";
import Img2 from "./Email campaign-bro.png";
import apple from "./Black_apple.png";
import playstore from "./black_play.png";
// import Phone from "./Phone.png";
// import Bg from "./blue_bg.jpg";
import "./Bmail.css";
import Accordion from "./Accordion/Accordion.jsx";

const Bmail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mobile, setMobile] = useState(false);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % Data.length);
  };

  const handlePrevious = () => {
    setCurrentImage(!currentImage ? Data.length - 1 : currentImage - 1);
  };
  return (
    <>
      {/* navbar */}
      <div className="bg-white shadow-xl flex justify-between flex-row items-center py-[1rem] px-[1rem] sm:px-[2rem] sticky top-0 z-30">
        <div>
          <img src={Logo} alt="" className="h-[80%] w-[11rem]" />
        </div>

        <div className=" hidden sm:flex flex-row md:gap-[4rem] gap-[2rem]">
          <button className="border-2 border-solid border-black py-3 px-6 rounded-md font-sans font-bold cursor-pointer hover:bg-black hover:text-white">
            Sign In
          </button>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md font-sans font-bold cursor-pointer ">
            Create an Account
          </button>
        </div>

        <div className="block sm:hidden">
          <img
            src={Ham}
            alt=""
            className="w-[2rem] h-[2rem]"
            onClick={() => setMobile(!mobile)}
          />
        </div>
      </div>

      {/* hamburger nav */}
      {mobile && (
        <div className="flex sm:hidden flex-row md:gap-[4rem] gap-[2rem] justify-center mt-[2rem]">
          <button className="border-2 border-solid border-black py-3 px-6 rounded-md font-sans font-bold cursor-pointer hover:bg-black hover:text-white">
            Sign In
          </button>
          <button className="bg-blue-500 text-white p-[0.5rem] rounded-md font-sans font-bold cursor-pointer ">
            Create an Account
          </button>
        </div>
      )}

      {/* second section with slider */}
      <div className="py-[2rem] flex flex-col lg:flex-row justify-center items-center gap-[2rem] sm:p-[2rem]">
        <div className="w-[100%] lg:w-[50%] px-[1rem] sm:px-[2rem] flex flex-col items-center">
          <h2 className="font-sans text-[2rem] text-center font-semibold">
            Secure, smart, and easy to use Bmail
          </h2>
          <p className="text-[1.15rem] text-center font-sans mt-[10px]">
            Unlock productivity with Bmail. All-in-one integration with Bharat
            Chat, Bharat Meet, and more.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md font-sans font-bold cursor-pointer mt-[20px] ">
            Create an Account
          </button>
        </div>

        <div className="w-[100%] lg:w-[50%] flex flex-row justify-center items-center px-[1rem] gap-[1rem]">
          <button onClick={handlePrevious} className="">
            <img
              src={Left}
              alt=""
              className="w-[100px] hover:bg-gray-200 hover:rounded-full hover:p-[5px]"
            />
          </button>

          {/* image slide */}
          <div className="flex flex-col justify-center items-center">
            <img src={Data[currentImage].img} alt="" className="" />
            <span className="font-semibold font-sans text-[1.5rem] text-center">
              {Data[currentImage].title}
            </span>
            <p className="font-sans text-center mt-[10px]">
              {Data[currentImage].para}
            </p>
          </div>

          <button onClick={handleNext} className="">
            <img
              src={Right}
              alt=""
              className="w-[100px] hover:bg-gray-200 hover:rounded-full hover:p-[5px]"
            />
          </button>
        </div>
      </div>

      {/* ai with bmail section */}
      <div className="mt-[4rem]">
        <h2 className="text-center font-sans font-semibold text-[2.5rem]">
          AI WITH BMAIL
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center mt-[0rem] md:mt-[2rem] p-[2rem]">
          <div>
            <img src={Img1} alt="" className="mb-[20px] md:w-[700px]" />
          </div>

          <div className="flex flex-col gap-[2rem]">
            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                Write better Bmails with the help of AI
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                AI in Bmail can compose well-written drafts or replies for you
                to edit, personalize and quickly hit send.
              </p>
            </div>

            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                Search your inbox in a whole new way
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                Ai can answer complex questions from your inbox or Bharat Drive
                files to help find what you’re looking for.
              </p>
            </div>

            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                See the important details, summarized
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                Stay on top of lengthy Bmail chains with built-in Bmail
                summarization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* next to ai with bmail */}
      <div className="mt-[4rem]">
        <h2 className="text-center font-sans font-semibold text-[2.5rem] leading-[50px]">
          Bmail that's secure, private, and puts you in control
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center mt-[0rem] md:mt-[2rem] p-[2rem]">
          <div className="flex flex-col gap-[2rem]">
            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                Write better Bmails with the help of AI{" "}
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                AI in Bmail can compose well-written drafts or replies for you
                to edit, personalize and quickly hit send.
              </p>
            </div>

            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                Search your inbox in a whole new way
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                Ai can answer complex questions from your inbox or Bharat Drive
                files to help find what you’re looking for.
              </p>
            </div>

            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                See the important details, summarized
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                Stay on top of lengthy Bmail chains with built-in Bmail
                summarization.
              </p>
            </div>

            <div className="relative bg-gray-200 py-[2rem] px-[1rem] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 border-animation"></div>
              <p className="relative text-blue-600 font-semibold text-[1.25rem]">
                See the important details, summarized
              </p>
              <p className="relative font-sans font-semibold mt-[5px]">
                Stay on top of lengthy Bmail chains with built-in Bmail
                summarization.
              </p>
            </div>
          </div>

          <div>
            <img src={Img2} alt="" className="md:w-[700px] mt-[20px]" />
          </div>
        </div>
      </div>

      {/* app download section */}
      <div className="bg-orange-300 mt-[2rem] py-[4rem] px-[5px]">
        <h2 className="text-white text-center font-sans font-bold text-[2rem] sm:text-[2.5rem]">
          Bring the best of Bmail to your device
        </h2>
        <div className="flex flex-row justify-center items-center gap-[2rem] mt-[20px]">
          <button className="bg-black text-white py-2 rounded-md font-sans font-bold cursor-pointer  ">
            <img src={apple} alt="" className="w-[80%] m-auto" />
          </button>
          <button className="bg-black text-white py-2 rounded-md font-sans font-bold cursor-pointer  ">
            <img src={playstore} alt="" className="w-[80%] m-auto" />
          </button>
        </div>
      </div>

      {/* Best Features Section */}
      <div className="bg_bmail mt-[4rem] py-[4rem] px-[1rem] sm:px-[2rem] md:p-[4rem] text-zinc-900">
        <h2 className="text-center text-[2rem] font-semibold font-sans sm:text-[2.5rem]">
          Our Best Features
        </h2>

        <div className="mt-[3rem]">
          <div className="mb-[2rem]">
            <p className="font-bold font-sans text-[1.5rem]">
              1). Works with other tools
            </p>
            <p className="font-semibold font-sans text-[20px] w-[100%] md:w-[50%]">
              Bmail works great with desktop clients like{" "}
              <span className="text-orange-500">
                Microsoft Outlook, Apple Mail and Mozilla Thunderbird
              </span>
              , including contact and event sync.
            </p>
          </div>
          <div className="mb-[2rem]">
            <p className="font-bold font-sans text-[1.5rem]">
              2). Stay productive, even offline
            </p>
            <p className="font-semibold font-sans text-[20px] w-[100%] md:w-[50%]">
              Bmail offline lets you{" "}
              <span className="text-orange-500">
                read, reply, delete, and search
              </span>{" "}
              your Bmail messages when you’re not connected to the internet.
            </p>
          </div>
          <div className="mb-[2rem]">
            <p className="font-bold font-sans text-[1.5rem]">
              3). Experience Bmail on any device
            </p>
            <p className="font-semibold font-sans text-[20px] w-[100%] md:w-[50%]">
              Enjoy the{" "}
              <span className="text-orange-500">
                ease and simplicity of Bmail
              </span>
              , wherever you are.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <Accordion />

      {/* show world section */}
      <div className="flex flex-col justify-center items-center my-[4rem]">
        <h2 className="text-[2.5rem] text-center font-serif">
          Show the world <br />
          how it’s done.
        </h2>

        <p className="text-center my-[1rem] text-[1.5rem] text-gray-500 tracking-[0.5px] opacity-[0.8]">
          Get started with a more powerful Bmail.
        </p>

        <button className="bg-blue-500 text-white py-3 px-6 rounded-md font-sans font-bold cursor-pointer ">
          Create an Account
        </button>
      </div>

      {/* Footer section */}
      <div className="bg-zinc-900 text-white flex flex-col lg:flex-row py-[3rem] px-[1rem] lg:px-[6rem] items-center">
        <div className="w-[100%] lg:w-[50%]">
          <img src={Logo} alt="" className="w-[7rem]" />
          <p className="mt-[15px]">
            Bmail continues to lead in the email services industry by harnessing
            the power of the cloud. Maximize the potential of your Bmail
            solutions. While cloud technology might not be revolutionary
            anymore, the way it enhances communication and fuels digital
            transformation remains impressive. Bmail has been at the forefront
            of this innovation , breaking industry barriers and setting new
            standards.
          </p>
        </div>

        <div className="mt-[20px] w-[100%] lg:w-[50%] flex flex-col sm:flex-row justify-center gap-[3rem]">
          <div className="">
            <h2 className="font-sans font-semibold text-[1.5rem]">
              Useful Links
            </h2>
            <ul>
              <li className="mt-[10px]">Create Account</li>
              <li className="mt-[10px]">Get in touch</li>
              <li className="mt-[10px]">Contact us</li>
              <li className="mt-[10px]">Know More</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-sans font-semibold text-[1.5rem]">
              Contact Information
            </h2>
            <ul>
              <li className="flex items-center mt-[10px] gap-[10px]">
                <p>Bmail Services</p>
              </li>
              <li className="flex items-center mt-[10px] gap-[10px]">
                <p>info@bmail.biz</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="bg-zinc-700 text-center font-sans font-semibold p-[15px]">
        <p className="text-white">
          2024 All Rights Reserved{" "}
          <span className="text-orange-500">Bmail Services</span>
        </p>
      </div>
    </>
  );
};

export default Bmail;
