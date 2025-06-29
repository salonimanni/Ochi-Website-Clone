import { motion } from "framer-motion";

import React from "react";

import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  motion
  return (
    
    
      <div data-scroll  data-scroll-speed=".2" className="w-full h-screen pt-1 bg-zinc-900">
        <div className="px-20 mt-40 textstructure">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
            return (
              <div className="masker" key={index}>
                <div className="flex items-end overflow-hidden w-fit">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease:[0.76,0,0.24,1] }}
                      className="h-[4.3vw] rounded-md  bg-green-500 mb-6 mr-2"
                    >
                      <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" srcset="" />
                    </motion.div>
                  )}
                  <h1
                    className="pt-[2vw] uppercase text-[7vw] leading-[5.2vw] font-bold"
                    style={{ fontFamily: "'Founders Grotesk', 'Roboto', sans-serif" }}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px]  border-zinc-800 mt-20 gap-6 flex justify-between items-center flex-col md:flex-row  py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className="font-light leading-none tracking-tighter text-md" key={index}>
              {item}
            </p>
          ))}
          <div className="flex items-center gap-5 Start">
            <div className="px-4 py-2 border-[2px] border-zinc-400 font font-light text-md uppercase rounded-full">
              Start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
  
  
  );
}

export default LandingPage;
