import { Box, styled, Typography } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <LandingContainer>
      <TypoContainer>
        <Typography variant="h1">안녕하세요,</Typography>
        <Typography variant="h1">Web Front-end 개발자</Typography>
        <Typography variant="h1">이시원 입니다.</Typography>
      </TypoContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "relative",
  background: "#FAF7ED",
});

const TypoContainer = styled(Box)({
  position: "absolute",
  left: "10%",
  "& > h1": {
    fontSize: "64px",
    fontWeight: 800,
  },
});

export default LandingPage;
