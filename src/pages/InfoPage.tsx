import { Box, styled, Typography } from "@mui/material";
import React from "react";
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

  return (
    <InfoContainer>
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
  height: "calc(100vh + 30px)",
  position: "relative",
  borderRadius: "0 0 100px 100px",
  overflowX: "hidden",
  display: "flex",
  padding: "100px 10%",
  flexDirection: "column",
  gap: "60px",
  justifyContent: "center",
  background: "#fff",
  zIndex: 10,
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
};
export default InfoPage;
