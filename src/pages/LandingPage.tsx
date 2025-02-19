import {
  Box,
  Button,
  colors,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import ProfileImg from "../assets/image/img-profile.png";
import DownloadIcon from "../assets/image/ic-download.png";
import LinkedInIcon from "../assets/image/ic-linkedin.png";
import GithubIcon from "../assets/image/ic-github.png";
import TistoryIcon from "../assets/image/ic-tistory.png";
import React from "react";
import { motion } from "motion/react";
import AnimatedCharacters from "../components/textAnimations/RevealWavyText";

const LandingPage = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <LandingContainer>
      <TypoContainer variants={container}>
        <Box mb={6}>
          <AnimatedCharacters text="안녕하세요" />
          <AnimatedCharacters text="Front-end Developer" />
          <AnimatedCharacters text="이시원 입니다." />
        </Box>
        <Box>
          <Typography>
            <Box component={"span"}>Email.</Box>
            siwon9898@gmail.com
          </Typography>
          <Typography>
            <Box component={"span"}>Phone.</Box>
            +82 01051532369
          </Typography>
          <Typography>
            <Box component={"span"}>Birth.</Box>
            1998.12.06
          </Typography>
          <Typography>
            <Box component={"span"}>Residence.</Box>
            Seoul, South Korea
          </Typography>
          {/* <Typography>
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
          </Typography> */}
          <LinkBox>
            <ResumeButton>
              Resume
              <img src={DownloadIcon} alt="download icon" />
            </ResumeButton>
            <IconButton>
              <img src={LinkedInIcon} alt="linkedin icon" />
            </IconButton>
            <IconButton>
              <img src={GithubIcon} alt="linkedin icon" />
            </IconButton>
            <IconButton sx={{ transform: "translateX(-1px)" }}>
              <img
                src={TistoryIcon}
                alt="linkedin icon"
                style={{ width: "42px" }}
              />
            </IconButton>
          </LinkBox>
        </Box>
      </TypoContainer>
      <ImageContainer>
        <img src={ProfileImg} alt="profile image" />
      </ImageContainer>
    </LandingContainer>
  );
};

const transition = {
  duration: 1,
  ease: [0.18, 0.12, 0.39, 0.98],
};

const textReveal = {
  initial: {
    y: "200%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
  },
};

const RegularText = styled(motion.h4)({
  fontSize: "64px",
  fontWeight: 500,
});

const BoldText = styled(motion.h1)({
  fontSize: "64px",
  fontWeight: 500,
});

const LandingContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh - 30px)",
  position: "relative",
  background: "#FAF7ED",
  borderRadius: "0 0 100px 100px",
  overflowX: "hidden",
  display: "flex",
});

const TypoContainer = styled(motion.div)({
  position: "absolute",
  left: "10%",
  top: "50%",
  transform: "translateY(-50%)",
  "& h3": {
    fontSize: "64px",
    fontWeight: 500,
  },
  "& h1": {
    fontSize: "64px",
    fontWeight: 700,
  },
  "& p": {
    color: "#333",
    fontSize: "20px",
    "& > span": {
      color: "#000",
      fontWeight: 700,
      marginRight: "10px",
    },
  },
});

const ImageContainer = styled(Box)({
  position: "absolute",
  right: "10%",
  top: "45%",
  transform: "translateY(-45%)",
  "& img": {
    width: "360px",
  },
});

const ResumeButton = styled(Button)({
  background: "#000",
  color: "#fff",
  borderRadius: "100px",
  padding: "10px 30px 10px 40px",
  letterSpacing: "1.5",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: 700,
  marginRight: "20px",
  "&:hover": {
    outline: "none",
  },
  "& > img": {
    marginLeft: "4px",
  },
});

const LinkBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "30px",
  gap: "10px",
  "& .MuiIconButton-root > img": {
    width: "36px",
  },
});
export default LandingPage;
