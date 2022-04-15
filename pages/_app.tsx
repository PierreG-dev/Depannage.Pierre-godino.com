import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/layout/Navbar";
import Footer from "../src/layout/Footer";
import styled from "styled-components";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContainer>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div`
  padding: 0;
  margin: 0;
`;

export default MyApp;
