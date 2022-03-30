import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Home: NextPage = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [actualView, setActualView] = useState(0);

  const handleScroll = (event: any) => {
    setScrollCount((prevState) => {
      if (event.deltaY < 0) {
        return prevState > 0 ? prevState - 1 : prevState;
      } else {
        return prevState < 8 ? prevState + 1 : prevState;
      }
    });
    console.log(event.deltaY);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "g" || event.key === "G") setScrollCount(0);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (scrollCount < 4) setActualView(0);
    else if (scrollCount < 8) setActualView(1);
    else if (scrollCount < 12) setActualView(2);

    console.log(scrollCount);
  }, [scrollCount]);

  return (
    <MainContainer>
      <div
        id="slider"
        style={{ transform: `translateY(-${actualView * 100}%)` }}
      >
        <div>issou</div>
        <div>la</div>
        <div>chancla</div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: 100vh;
  overflow: hidden;

  #slider {
    height: 100vh;
    transition: 0.5s;

    div {
      height: 100vh;
      width: 100vw;
      background: midnightblue;
      color: red;
    }
  }
`;

export default Home;
