"use client";
import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{
        top: 0,
      }}
      animate={{
        top: "-100%",
        filter: "blur(10px)",
        scaleX: 1.2,
      }}
      transition={{
        delay: 2.5,
        duration: 1,
      }}
      className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen bg-neutral-900 z-[200] flex items-center justify-center flex-col gap-1"
    >
      <motion.div className="text-5xl font-bold flex items-center overflow-hidden">
        {"M@N!$#".split("").map((e, index) => (
          <motion.div
            key={e}
            initial={{
              y: 50,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              type: "spring",
              delay: (index + 1) * 0.1,
            }}
          >
            {e}
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="text-lg font-light flex items-center overflow-hidden">
        <motion.div
          initial={{
            y: -30,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="tracking-widest text-neutral-400"
        >
          Full stack developer
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
