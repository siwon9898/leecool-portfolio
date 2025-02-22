import { Box, styled } from "@mui/material";
import  { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

const CommonLayout = () => {
  const scrollbar = useRef<BaseScrollbar | null>(null);

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
