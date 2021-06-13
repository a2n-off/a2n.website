import React from 'react';
import { motion } from 'framer-motion';

const AiSvg = () => {

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(34, 30, 31, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(34, 30, 31, 1)"
    }
  };

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.5 39.07">
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 0.5, ease: "easeInOut" },
          fill: { duration: 0.5, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
        fill="#221E1F"
        stroke="#feb300"
        strokeWidth="0.3px"
        d="M25.5 8.21 17 39.07 8.5 39.07 17 8.21 25.5 8.21"
      />
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 0.5, ease: "easeInOut" },
          fill: { duration: 0.5, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
        fill="#221E1F"
        stroke="#feb300"
        strokeWidth="0.3px"
        d="M17 0 8.5 30.86 0 30.86 8.5 0 17 0"
      />
    </motion.svg>
  )
}

export default AiSvg;
