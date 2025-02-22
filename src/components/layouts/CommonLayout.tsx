import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Scrollbar } from "smooth-scrollbar-react";

const CommonLayout = () => {

  return (
    <Scrollbar>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </Scrollbar>
  );
};

const PageLayout = styled(Box)({
  position: "relative",
  width: "100vw",
  fontFamily: "Pretendard",
  // overflowX: "hidden",
});

export default CommonLayout;
