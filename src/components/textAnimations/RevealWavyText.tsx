import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const AnimatedCharacters = ({ text }: { text: string }) => {
  // 애니메이션 설정
  const item = {
    hidden: { y: "200%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // 텍스트를 한 글자씩 나누기
  const letters = text.split("");

  return (
    <Typography variant="h1" component="span" sx={{ display: "block" }}>
      {letters.map((char, index) => (
        <span
          key={index}
          style={{ overflow: "hidden", display: "inline-block" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={item}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </Typography>
  );
};

export default AnimatedCharacters;
