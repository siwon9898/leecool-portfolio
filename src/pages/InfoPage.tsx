import { Box, styled } from "@mui/material";
import React from "react";

const InfoPage = () => {
  return <InfoContainer>InfoPage</InfoContainer>;
};
const InfoContainer = styled(Box)({
  width: "100%",
  height: "calc(100vh + 30px)",
  position: "relative",
  borderRadius: "0 0 100px 100px",
  overflowX: "hidden",
  display: "flex",
});
export default InfoPage;
