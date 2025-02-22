import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ProjectPage = () => {
  return (
    <ProjectContainer>
      <WorkTypo>WORKS.</WorkTypo>
      <ProjectBox>
        <Box>Project 1</Box>
        <Box>Project 2</Box>
        <Box>Project 3</Box>
        <Box>Project 4</Box>
        <Box>Project 5</Box>
        <Box>Project ６</Box>
      </ProjectBox>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(Box)({
  width: "100%",
  // height: "calc(100vh + 30px)",
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
  top: "-100px",
  "@media (max-width : 1260px)": {
    padding: "100px 5%",
  },
});

const WorkTypo = styled(Typography)({
  fontSize: "64px",
  fontWeight: "700",
  color :'#000',
  "@media (max-width : 1080px)" : {
    fontSize : '48px'
   },
   "@media (max-width : 440px)" : {
    fontSize : '36px'
   }
});

const ProjectBox = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  flexShrink: 0,
  "& > div": {
    marginTop: "20px",
    width: "calc(33% - 10px)",
    height: "calc(26.66vw - 10px)",
    padding: "40px 60px",
    background: "#F3F3F3",
    borderRadius: "100px",
  },
});

export default ProjectPage;
