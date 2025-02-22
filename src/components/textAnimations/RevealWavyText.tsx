import { motion } from "framer-motion";
import { styled, Typography } from "@mui/material";

const AnimatedCharacters = ({
  text,
  isbold,
}: {
  text: string;
  isbold?: boolean;
}) => {
  // 애니메이션 설정
  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // 텍스트를 한 글자씩 나누기
  const letters = text
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  return (
    <Typography
      variant="h1"
      component="span"
      sx={{
        display: "block",
        fontWeight: isbold ? 700 : 600,
        fontSize: {
          xs: "32px",
          sm: "42px",
          md: "48px",
          lg: "64px",
        },
      }}
    >
      {letters.map((char, index) => (
        <span
          key={index}
          style={{ overflow: "hidden", display: "inline-block" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </Typography>
  );
};

const AnimateTypo = styled(Typography)((props: { isbold?: boolean }) => {
  return {
    display: "block",
    fontWeight: props.isbold ? 700 : 600,
    fontSize: "64px",
  };
});

export default AnimatedCharacters;
