"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedDiv = ({ children, className = "" }: any) => {
  return (
    <motion.div
      className={` block justify-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
