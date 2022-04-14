import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwipeable, UP, DOWN, SwipeEventData } from "react-swipeable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Home: NextPage = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [actualView, setActualView] = useState(0);

  // const swipeHandlers = useSwipeable({
  //   onSwipedDown: (e: SwipeEventData) => {
  //     alert(e.dir);
  //     setActualView((prevState) => {
  //       return prevState < 2 ? prevState + 1 : prevState;
  //     });
  //   },
  //   onSwipedUp: (e: SwipeEventData) => {
  //     alert(e.dir);
  //     setActualView((prevState) => {
  //       return prevState > 0 ? prevState - 1 : prevState;
  //     });
  //   },
  // });

  const swipeHandlers = useSwipeable({
    onSwiped: (event: SwipeEventData) => {
      console.log(event.dir);
      if (event.dir === UP) {
        setActualView((prevState) => {
          return prevState < 2 ? prevState + 1 : prevState;
        });
      } else if (event.dir === DOWN) {
        setActualView((prevState) => {
          return prevState > 0 ? prevState - 1 : prevState;
        });
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
        {...swipeHandlers}
      >
        <SliderElement style={{ background: "#4e54c8" }}>
          <div
            className="content"
            style={{ animation: actualView === 0 ? "Appearing 2s 1" : "none" }}
          >
            <h2>Matériel</h2>
            <p>
              J'intervient sur vos PC portables et PC de bureau pour le
              diagnostic et les pannes en tout genre.
            </p>
            <ul>
              <li>Diagnostic Panne</li>
              <li>PC sur mesure</li>
              <li>Conseils d'achats</li>
              <li>
                Remplacement composant défectueux (clavier, écran, carte
                vidéo... etc.)
              </li>
              <li>Nettoyage</li>
              <li>Amélioration du PC (SSD, GPU, CPU... etc.)</li>
            </ul>
          </div>
          <div id="lines-container">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </SliderElement>
        <SliderElement>
          <div
            className="content"
            style={{ animation: actualView === 1 ? "Appearing 2s 1" : "none" }}
          >
            <h2>Logiciel</h2>
            <p>
              Ordinateur lent ? Infection par un virus informatique ?
              j'intervient chez vous rapidement !
            </p>
            <ul>
              <li>Nettoyage Malware & Virus informatiques</li>
              <li>Réinstallation complète Windows toutes versions</li>
              <li>Pannes logicielles</li>
              <li>Installation logicielle</li>
              <li>Récupération de données</li>
              <li>Optimisation des performances PC</li>
            </ul>
          </div>
          <div id="virus_animation"></div>
        </SliderElement>
        <SliderElement>
          <div
            className="content"
            style={{ animation: actualView === 2 ? "Appearing 2s 1" : "none" }}
          >
            <h2>Assistance</h2>
            <p>
              Besoin d'un coup de main ? Nous installons ensemble vos
              équipements (Box, TV, CPL... etc.) Je suis également à votre
              disposition Pour vous apprendre les fondements de l'informatique.
            </p>
            <ul>
              <li>Installation et configuration internet & TV</li>
              <li>Gestion de périphériques</li>
              <li>Cablâge réseau domestique</li>
              <li>Prise en main du matériel</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div className="area">
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
        </SliderElement>
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
  }
`;

const SliderElement = styled.section`
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  overflow: hidden;
  position: relative;

  .content {
    padding: 0 15px;
    position: absolute;
    max-width: calc(100vw - 15px);
    margin: auto;
    z-index: 2;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 30px 0;
    }
    h2,
    p,
    li {
      text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.6);
    }
    li:before {
      content: "- ";
    }

    h2 {
      letter-spacing: 7px;
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
    li {
      font-size: 1.2rem;
    }
  }
`;

export default Home;
