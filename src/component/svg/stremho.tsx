import React from 'react';
import { motion } from 'framer-motion';

const StremhoSvg = () => {

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
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.97 133.03">
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
        fill="#221E1F"
        stroke="#1eb53a"
        strokeWidth="1px"
        d="M127.82,92.38a63.05,63.05,0,0,1-25,3.46l8.37-25-9.5-3.29L92.82,93.78c-9.84-3.44-19-11.49-22.95-28.43C59.21,20.05,19.05,20,19.05,20,35.06,5.09,48.38,2.52,48.38,2.52S73.48-5.63,97,7.37,127.2,39.21,127.2,39.21C95.58,30.1,75.6,49.87,75.6,49.87l3.27,10.61c23.11-23.72,52.44-9.12,52.44-9.12C136.52,75.57,127.82,92.38,127.82,92.38Z"
      />
      <motion.path
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
        }}
        variants={icon}
        fill="#221E1F"
        stroke="#1eb53a"
        strokeWidth="1px"
        d="M11.09,29.77a52.66,52.66,0,0,1,21,3.41L23.12,59.53l9.46,3.29,8.5-25s14.21,7.29,21.54,37.29S96.06,110,120.75,105c0,0-13.87,21-40.42,26.55,0,0-21.4,6.06-45.43-6.56S3.07,87.6,2.05,82.83c0,0,28.57,21.57,53.65,4.41L52.62,76.52S34.86,97.07.07,68.74A66.83,66.83,0,0,1,11.09,29.77Z"
      />
    </motion.svg>
  )
}

export default StremhoSvg;
