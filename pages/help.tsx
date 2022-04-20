import React from "react";
import styled from "styled-components";

const Help = () => {
  return (
    <MainContainer>
      <header>
        <div className="content">
          <h1>Assistance</h1>
        </div>
        <div className="area" style={{ backgroundPosition: "center" }}>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </header>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100vw;

  header {
    position: relative;
    background: #373737;
    height: 40vh;
    width: 100%;

    .content {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;

      h1 {
        color: #fafafa;
        text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.6);
        font-size: 2.5rem;
      }
    }
  }
`;

export default Help;
