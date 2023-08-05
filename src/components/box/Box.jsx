import React from "react";
import { motion } from "framer-motion";
import "./Box.css";
function Box() {
  return (
    <>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    </>
  );
}

export default Box;
