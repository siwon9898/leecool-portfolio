import { Box, Button, styled, Typography } from "@mui/material";
import ProfileImg from "../assets/image/img-profile.png";
import React from "react";

const LandingPage = () => {
  return (
    <LandingContainer>
      <TypoContainer>
        <Box mb={4}>
          <Typography variant="h1">안녕하세요,</Typography>
          <Typography variant="h1">Web Front-end 개발자</Typography>
          <Typography variant="h1">이시원 입니다.</Typography>
        </Box>
        <Box>
          <Typography>
            React, Typescript 기반의 4년차 Frontend 개발자 입니다.
            <br />
            기업의 인사이트 도출을 위한 빅데이터 통합 플랫폼 및 어드민 서비스
            개발 등을 해왔습니다.
            <br />
            사용 매뉴얼이 필요 없는 서비스를 목표로, 심플함이 곧 강력함 이라는
            철학을 바탕으로 개발에 임합니다.
            <br />
            지속 가능한 UX라는 공동 가치를 위해 팀과 함께 성장하며 기여하고자
            합니다.
          </Typography>
          <ResumeButton>Resume</ResumeButton>
        </Box>
      </TypoContainer>
      <ImageContainer>
        <img src={ProfileImg} alt="profile image" />
      </ImageContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 30px)",
  position: "relative",
  background: "#FAF7ED",
  borderRadius: "0 0 100px 100px",
  overflowX: "hidden",
  display: "flex",
});

const TypoContainer = styled(Box)({
  position: "absolute",
  left: "10%",
  top: "40%",
  transform: "translateY(-40%)",
  "& h1": {
    fontSize: "64px",
    fontWeight: 700,
  },
  "& p": {
    color: "#777",
    fontSize: "18px",
  },
});

const ImageContainer = styled(Box)({
  position: "absolute",
  right: "10%",
  top: "40%",
  transform: "translateY(-40%)",
  "& img": {
    width: "360px",
  },
});

const ResumeButton = styled(Button)({
  marginTop: "30px",
  background: "#000",
  color: "#fff",
  borderRadius: "100px",
  padding: "10px 40px",
  "&:hover": {
    outline: "none",
  },
});
export default LandingPage;
