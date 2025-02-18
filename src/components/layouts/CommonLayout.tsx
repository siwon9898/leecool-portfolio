import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

const PageLayout = styled(Box)({
  position: "relative",
  width: "100vw",
  minHeight: "100vh",
});

export default CommonLayout;
