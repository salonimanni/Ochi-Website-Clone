import React from "react";
import { motion } from "framer-motion";''

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="flex overflow-hidden border-t-2 border-b-2 text border-zinc-300 whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw]  leading-none font-semibold pr-10  tracking-tight  uppercase pt-5 -mb-[6vw] font-['Founders_Grotesk'] "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw]  leading-none pr-10 font-semibold  tracking-tight uppercase pt-5 -mb-[6vw] font-['Founders_Grotesk']"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
