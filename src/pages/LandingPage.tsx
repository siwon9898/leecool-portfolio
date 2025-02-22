import {
  Box,
  Button,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import ProfileImg from "../assets/image/img-profile.png";
import DownloadIcon from "../assets/image/ic-download.png";
import LinkedInIcon from "../assets/image/ic-linkedin.png";
import GithubIcon from "../assets/image/ic-github.png";
import TistoryIcon from "../assets/image/ic-tistory.png";
import  {  useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedCharacters from "../components/textAnimations/RevealWavyText";
import resume from '../assets/document/resume.pdf'
const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 400]);
  const pageHeight = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["100vh", "calc(100vh - 30px)"]
  );

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const revealCircle = {
    hidden: {
      x: 0, // 추가 가능 (X축 이동)
      y: "-45%", // Y축 이동
    },
    visible: {
      x: "60px",
      y: "calc(-45% + 60px)", // 수정된 부분
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = '이시원_이력서.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const linkToUrl = (link : string) => {
    window.open(link, '_blank')
  }
 

  return (
    <LandingContainer
      ref={containerRef}
      style={{ borderRadius: borderRadius, height: pageHeight }}
    >
      <TypoContainer variants={container}>
        <Box mb={6}>
          <AnimatedCharacters text="안녕하세요," />
          <AnimatedCharacters text="Front-end Developer" isbold />
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
          <LinkBox>
            <ResumeButton onClick={downloadPDF}>
              Resume
              <img src={DownloadIcon} alt="download icon" />
            </ResumeButton>
            <IconButton onClick={() => linkToUrl('https://www.linkedin.com/in/%EC%8B%9C%EC%9B%90-%EC%9D%B4-20b59b1b5/')}>
              <img src={LinkedInIcon} alt="linkedin icon" />
            </IconButton>
            <IconButton onClick={() => linkToUrl('https://github.com/siwon9898')}>
              <img src={GithubIcon} alt="linkedin icon" />
            </IconButton>
            <IconButton sx={{ transform: "translateX(-1px)" }} onClick={() => linkToUrl('https://leecool-develops.tistory.com/')}>
              <img
                src={TistoryIcon}
                alt="linkedin icon"
                style={{ width: "41px" }}
              />
            </IconButton>
          </LinkBox>
        </Box>
      </TypoContainer>
      <ImageContainer>
        <img src={ProfileImg} alt="profile image" />
        <BlackCircle
          variants={revealCircle}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
          }}
        ></BlackCircle>
      </ImageContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled(motion.div)({
  width: "100%",
  // minHeight: "calc(100vh - 30px)",
  position: "relative",
  background: "#FAF7ED",
  display: "flex",
  "@media (max-width : 840px)": {
    display: "block",
  },
});

const TypoContainer = styled(motion.div)({
  position: "absolute",
  left: "10%",
  top: "50%",
  transform: "translateY(-50%)",
  color : '#000',
  "@media (max-width : 840px)": {
    top: "60%",
    transform: "translateY(-60%)",
  },
  "& h3": {
    fontSize: "64px",
    fontWeight: 500,
    "@media (max-width : 1200px)": {
      fontSize: "24px",
    },
  },
  "& h1": {
    fontSize: "64px",
    fontWeight: 700,
    color:'#333',
    "@media (max-width : 1200px)": {
      fontSize: "24px",
    },
  },
  "& p": {
    color: "#333",
    fontSize: "20px",
    "@media (max-width : 1200px)": {
      fontSize: "16px",
    },

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
  "@media (max-width : 840px)": {
    top: "10%",
    transform: "translateY(-10%)",
  },
  "& img": {
    width: "360px",
    "@media (max-width : 1024px)": {
      width: "280px",
    },
    "@media (max-width : 840px)": {
      width: "200px",
    },
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
  "@media (max-width : 1200px)": {
    fontSize: "14px",
    padding: "6px 20px 6px 30px",
  },
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
  "@media (max-width : 1200px)": {
    gap: "4px",
  },
  "& .MuiIconButton-root > img": {
    width: "36px",
    "@media (max-width : 1200px)": {
      width: "28px",
    },
  },
});

const BlackCircle = styled(motion.div)({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: "#000",
  position: "absolute",
  right: "10%",
  top: "45%",
  transform: "translateY(-45%)",
  zIndex: -1,
  "@media (max-width : 1024px)": {
    width: "240px",
    height: "240px",
  },
  "@media (max-width : 840px)": {
    width: "140px",
    height: "140px",
    right: "24%",
    top: "36%",
    transform: "translateY(-36%)",
  },
});
export default LandingPage;
