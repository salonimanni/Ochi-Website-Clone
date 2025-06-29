import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [isHovering0, setHovering0] = useState(false);
  const [isHovering1, setHovering1] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-6 pb-6 border-b md:px-20 md:pb-20 border-zinc-700">
        <h1 className="text-4xl tracking-tighter md:text-7xl">Featured Projects</h1>
      </div>
      <div className="px-6 md:px-20">
        <div className="flex flex-col w-full gap-6 mt-6 md:flex-row md:gap-10 md:mt-10">
          {/* Card 1 */}
          <motion.div
            className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden"
            onHoverStart={() => setHovering0(true)}
            onHoverEnd={() => setHovering0(false)}
          >
            <motion.div
              className="absolute flex overflow-hidden -ml-4 md:-ml-20 text-[#CDEA68] top-1/2 transform -translate-y-1/2 right-0 leading-none tracking-tighter pb-6 md:pb-20 text-2xl md:text-6xl"
              initial="hidden"
              animate={isHovering0 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-100%" }
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Project FYDE"
                srcSet="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png 2x"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] overflow-hidden"
            onHoverStart={() => setHovering1(true)}
            onHoverEnd={() => setHovering1(false)}
          >
            <motion.div
              className="absolute flex overflow-hidden text-[#CDEA68] top-1/2 transform -translate-y-1/2 left-0 leading-none tracking-tighter pb-6 md:pb-20 text-2xl md:text-6xl"
              initial="hidden"
              animate={isHovering1 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: "-100%" }
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Project VISE"
                srcSet="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg 2x"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
