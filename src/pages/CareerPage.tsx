import { Box, styled, Typography } from "@mui/material";
import ZtsLogo from "../assets/image/제타로고.png";
import React from "react";

const CareerPage = () => {
  return (
    <CareerContainer>
      <Box>
        <Typo>CAREER.</Typo>
        <CareerBox>
          <Box mb={3}>
            <img src={ZtsLogo} />
            <Typography>2021.12.01 - 재직 중</Typography>
          </Box>
          <Box>
            <Typography variant="h3">(주) 제타소프트</Typography>
            <Typography>기술서비스본부 UX LAB (2025.01.02 - )</Typography>
            <Typography>
              기술서비스본부 서비스개발팀 (2021.12.01 - 2024.12.31)
            </Typography>
          </Box>
        </CareerBox>
      </Box>
    </CareerContainer>
  );
};
const CareerContainer = styled(Box)({
  top: "-100px",
  width: "100%",
  background: "#FAF7ED",
  position: "relative",
  borderRadius: "0 0 60px 60px",
  // overflowX: "hidden",
  display: "flex",
  padding: "180px 10% 80px 10%",
  flexDirection: "column",
  gap: "120px",
  justifyContent: "center",
  "& > div": {
    display: "flex",
    // alignItems: "center",
    gap: "20px",
  },
});

const Typo = styled(Typography)({
  fontSize: "64px",
  fontWeight: "700",
  marginBottom: "20px",
});

const CareerBox = styled(Box)({
  marginTop: "20px",
  background: "#fff",
  width: "50%",
  padding: "60px 80px",
  borderRadius: "0 100px 100px 100px",
  "& img": {
    width: "150px",
  },
  "& h3": {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: 600,
  },
  "& p": {
    fontSize: "18px",
  },
});

export default CareerPage;
