import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/layout/Navbar";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContainer>
      <Navbar />
      <Component {...pageProps} />;
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div``;

export default MyApp;
