import React from "react";

function Cards() {
  return (
    <div className="flex items-center w-full h-screen gap-5 px-32 bg-zinc-900">
    {/* Upper Card */}
    <div className="w-full h-[50vh] cardcontainer mb-5 md:mb-0">
      <div className="w-full card relative  flex-col rounded-xl h-full bg-[#004D43] flex justify-center items-center">
        <img
          className="w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
          &copy;2019
        </button>
      </div>
    </div>
  
    {/* Lower Cards */}
    <div className="flex flex-col w-full gap-5 md:flex-row cardcontainer">
      {/* First Card */}
      <div className="w-full md:w-1/2 rounded-xl card bg-[#192826] flex items-center justify-center relative h-[50vh]">
        <img
          className="w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          alt=""
        />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
          &copy;2019
        </button>
      </div>
  
      {/* Second Card */}
      <div className="w-full md:w-1/2 rounded-xl card bg-[#192826] flex items-center justify-center relative h-[50vh]">
        <img
          className="w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt=""
        />
        <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
          &copy;2019
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Cards;
