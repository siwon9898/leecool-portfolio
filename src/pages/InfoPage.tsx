import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import SkillBadge from "../components/badge/SkillBadge";

const InfoPage = () => {
  const devSkills: string[] = [
    "React",
    "Typescript",
    "Javascript",
    "Zustand",
    "Tanstack Query",
    "Vite",
  ];

  const nonDevSkills: string[] = ["Communication", "English (Native)"];

  const leftReveal = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const bottomReveal = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 0.45,
      },
    },
  };

  const rightReveal = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 0.9,
      },
    },
  };

  const fadeIn = {
    hidden: {
      y: "40%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 1.5,
      },
    },
  };

  return (
    <InfoContainer>
      <SubIntroBox>
        <Typography variant="h2">
          <Box component={"span"} style={styles.animateTypo}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={leftReveal}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false }}
            >
              Strength
            </motion.span>
          </Box>
          <Box component={"span"} style={styles.animateTypo}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={bottomReveal}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false }}
            >
              in
            </motion.span>
          </Box>
          <Box
            component={"span"}
            style={{ ...styles.animateTypo, marginRight: 0 }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={rightReveal}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false }}
            >
              Simplicity
            </motion.span>
          </Box>
        </Typography>
        <motion.p
          variants={fadeIn}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false }}
        >
          React, Typescript 기반의 4년차 Front-end 개발자 입니다.
          <br />
          기업의 인사이트 도출을 위한 빅데이터 통합 플랫폼 및 어드민 서비스 개발
          등을 해왔습니다.
          <br />
          사용 매뉴얼이 필요 없는 서비스를 목표로, 심플함이 곧 강력함 이라는
          철학을 바탕으로 개발에 임합니다.
          <br />
          지속 가능한 UX라는 공동 가치를 위해 팀과 함께 성장하며 기여하고자
          합니다.
        </motion.p>
      </SubIntroBox>
      <Box>
        <InfoTypo>SKILLS.</InfoTypo>
        <AlignCenter mb={2}>
          {devSkills.map((item) => (
            <SkillBadge text={item} key={item} isDev />
          ))}
        </AlignCenter>
        <AlignCenter>
          {nonDevSkills.map((item) => (
            <SkillBadge text={item} key={item} />
          ))}
        </AlignCenter>
      </Box>
      <Box>
        <InfoTypo>EDUCATION.</InfoTypo>
        <Typography sx={styles.eduTypo}>
          단국대학교 응용컴퓨터공학과 학사 졸업 (2021.8)
        </Typography>
        <Typography sx={styles.eduTypo}>
          대구원화여자고등학교 졸업 (2017.2)
        </Typography>
      </Box>
      <Box>
        <InfoTypo>CERTIFICATES.</InfoTypo>
        <CertContainer mb={2}>
          <Typography>한국산업인력공단</Typography>
          <Typography>
            <Box component={"span"}>정보처리기사</Box>
          </Typography>
          <Typography>취득</Typography>
          <Typography>2021.8</Typography>
        </CertContainer>
        <CertContainer>
          <Typography>ACTFL</Typography>
          <Typography>
            <Box component={"span"}>OPIc</Box>
          </Typography>
          <Typography>
            <Box component={"span"}>AL(Advanced Low)</Box>
          </Typography>
          <Typography>2024.2</Typography>
        </CertContainer>
      </Box>
    </InfoContainer>
  );
};

const InfoContainer = styled(Box)({
  width: "100%",
  minHeight: "calc(100vh + 30px)",
  position: "relative",
  borderRadius: "0 0 100px 100px",
  // overflowX: "hidden",
  display: "flex",
  padding: "100px 10%",
  flexDirection: "column",
  gap: "60px",
  justifyContent: "center",
  background: "#fff",
  zIndex: 10,
});

const SubIntroBox = styled(Box)({
  textAlign: "center",
  width: "100%",
  padding: "120px 0 240px 0",

  "& > h2": {
    fontWeight: 600,
    marginBottom: "20px",
    fontFamily: "Bacasime Antique !important",
    "& *": {
      fontFamily: "Bacasime Antique !important",
    },
  },
  "& > p": {
    fontSize: "20px",
    color: "#555",
  },
});

const InfoTypo = styled(Typography)({
  fontSize: "64px",
  fontWeight: "700",
  marginBottom: "20px",
});

const AlignCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "10px",
});

const CertContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "0 40px",
  "& > p": {
    width: "20%",
    borderRight: "2px solid #E6E6E6",
    textAlign: "center",
    fontSize: "20px",
    color: "#939393",
    "& > span": {
      color: "#000",
      fontWeight: 600,
    },
    "&:first-of-type": {
      textAlign: "left",
    },
    "&:last-of-type": {
      border: "none",
    },
  },
});

const styles = {
  eduTypo: {
    fontSize: "22px",
  },
  animateTypo: {
    overflow: "hidden",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "14px",
  },
};
export default InfoPage;
