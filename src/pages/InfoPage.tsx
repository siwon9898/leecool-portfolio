import { Box, styled, Typography } from "@mui/material";
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

  const fadeIn2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 0.6,
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
        <Typography>
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
        </Typography>
      </SubIntroBox>
      <motion.div
        variants={fadeIn2}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
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
      </motion.div>
      <motion.div
        variants={fadeIn2}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <InfoTypo>EDUCATION.</InfoTypo>
        <EduTypo>
          단국대학교 응용컴퓨터공학과 학사 졸업 (2021.8)
        </EduTypo>
        <EduTypo>
          대구원화여자고등학교 졸업 (2017.2)
        </EduTypo>
      </motion.div>
      <motion.div
        variants={fadeIn2}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
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
      </motion.div>
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
  "@media (max-width : 1260px)": {
    padding: "100px 5%",
  },
});

const SubIntroBox = styled(Box)({
  textAlign: "center",
  width: "100%",
  padding: "120px 0 240px 0",
  "@media (max-width : 440px)" : {
    paddingBottom : '120px'
   },
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
    "@media (max-width : 1080px)" : {
    fontSize : '18px'
   } ,"@media (max-width : 440px)" : {
    fontSize : '12px'
   }
  },
});

const InfoTypo = styled(Typography)({
  fontSize: "64px",
  fontWeight: "700",
  marginBottom: "20px",
  color : '#000',
   "@media (max-width : 1080px)" : {
    fontSize : '48px'
   },
   "@media (max-width : 440px)" : {
    fontSize : '36px'
   }
});

const AlignCenter = styled(Box)({
  display: "block",
  // alignItems: "center",
  width: "100%",
  // gap: "10px",
});

const CertContainer = styled(Box)({
  // display: "flex",
  // alignItems: "center",
  // padding: "0 40px",
  display : 'block',
  "@media (max-width : 440px)" : {
    padding : '0px',
  
   },
  "& > p": {
    display : 'inline-block',
    width: "20%",
    borderRight: "2px solid #E6E6E6",
    textAlign: "center",
    fontSize: "20px",
    color: "#939393",
    padding : '0 20px',
    whiteSpace: 'nowrap',
    minWidth: "165px",
    "@media (max-width : 1080px)" : {
      fontSize : '16px'
     },
     "@media (max-width : 440px)" : {
      fontSize : '12px',
    
     },
    "& > span": {
      color: "#000",
      fontWeight: 600,
    },
    // "&:first-of-type": {
    //   textAlign: "left",
    // },
    "&:last-of-type": {
      border: "none",
    },
  },
});

const EduTypo = styled(Typography)({
    fontSize: "22px",
    color :'#333',
    "@media (max-width : 1080px)" : {
      fontSize : '18px'
     },
     "@media (max-width : 440px)" : {
      fontSize : '14px'
     }
})

const styles = {
  eduTypo: {
    fontSize: "22px",
    color :'#333'
  },
  animateTypo: {
    overflow: "hidden",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "14px",
    color : '#000'
  },
};
export default InfoPage;
