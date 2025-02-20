import { useEffect, useRef, useState } from "react";
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
import { useMotionValue, useMotionValueEvent, useScroll } from "motion/react";

function App() {
  const scrollbarRef = useRef<BaseScrollbar | null>(null);
  const [scrollY, setScrollY] = useState<number>();
  const scrollMotion = useMotionValue(0); // ✅ Motion Value 생성

  useEffect(() => {
    const scrollbar = scrollbarRef.current;

    if (!scrollbar) return;

    scrollbar?.addListener((status) => {
      console.log("status", status);
    });

    if (scrollbar.offset.y !== scrollY) {
      setScrollY(scrollbar.offset.y);
    }
  }, [scrollbarRef.current?.offset.y]);

  return (
    <>
      <Scrollbar
        ref={scrollbarRef}
        plugins={{ overscroll: { effect: OverscrollEffect.GLOW } } as const}
        damping={0.05}
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
  display: "flex",
});

export default App;
