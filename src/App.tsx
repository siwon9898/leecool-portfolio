import { useEffect, useRef } from "react";
import "./App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Box, styled } from "@mui/material";
import LandingPage from "./pages/LandingPage";
import InfoPage from "./pages/InfoPage";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { Scrollbar } from "smooth-scrollbar-react";
import { OverscrollEffect } from "smooth-scrollbar/plugins/overscroll";
import CareerPage from "./pages/CareerPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const scrollbar = useRef<BaseScrollbar | null>(null);

  return (
    <>
      <Scrollbar
        ref={scrollbar}
        plugins={{ overscroll: { effect: OverscrollEffect.GLOW } } as const}
      >
        <PageLayout>
          <LandingPage />
          <InfoPage />
          <CareerPage />
          <ProjectPage />
        </PageLayout>
      </Scrollbar>
    </>
  );
}

const PageLayout = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "100vh",
  fontFamily: "Pretendard",
  overflowX: "hidden",
  display: "flex",
});

export default App;
