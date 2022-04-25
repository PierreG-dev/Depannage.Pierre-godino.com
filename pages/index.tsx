import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwipeable, UP, DOWN, SwipeEventData } from "react-swipeable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faGears,
  faHandHoldingHand,
} from "@fortawesome/free-solid-svg-icons";

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
          return prevState < 3 ? prevState + 1 : prevState;
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
        return prevState < 12 ? prevState + 1 : prevState;
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
    else if (scrollCount < 16) setActualView(3);

    console.log(scrollCount);
  }, [scrollCount]);

  return (
    <MainContainer>
      <div
        id="slider"
        style={{ transform: `translate3d(0,-${actualView * 100}%,0)` }}
        {...swipeHandlers}
      >
        <SliderElement>
          <div
            className="content"
            style={{ animation: actualView === 0 ? "Appearing 2s 1" : "none" }}
          >
            <div className="mb-12">
              <h2>Bienvenue !</h2>
              <p>Que puis-je faire pour vous ?</p>
            </div>
            <div id="landing" className="flex-col lg:flex-row">
              <button
                onClick={() => setScrollCount(4)}
                className="text-xl md:text-3xl lg:text-3xl "
              >
                <FontAwesomeIcon icon={faLaptop} style={{ color: "#f1c40f" }} />
                <br />
                Problème matériel
              </button>

              <button
                onClick={() => setScrollCount(8)}
                className="text-xl md:text-3xl lg:text-3xl "
              >
                <FontAwesomeIcon icon={faGears} style={{ color: "#3498db" }} />
                <br />
                Problème logiciel
              </button>

              <button
                onClick={() => setScrollCount(12)}
                className="text-xl md:text-3xl lg:text-3xl "
              >
                <FontAwesomeIcon
                  icon={faHandHoldingHand}
                  style={{ color: "#2ecc71" }}
                />
                <br />
                Besoin d'aide
              </button>
            </div>
          </div>
          <div className="bcg-star">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
        </SliderElement>
        <SliderElement style={{ background: "#4e54c8" }} id="hardware">
          <div
            className="content"
            style={{ animation: actualView === 1 ? "Appearing 2s 1" : "none" }}
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
            <Link href={"/hardware"}>
              <button>En savoir plus</button>
            </Link>
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
        <SliderElement id="software">
          <div
            className="content"
            style={{ animation: actualView === 2 ? "Appearing 2s 1" : "none" }}
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
            <Link href={"/software"}>
              <button>En savoir plus</button>
            </Link>
          </div>
          <div id="virus_animation"></div>
        </SliderElement>
        <SliderElement id="help">
          <div
            className="content"
            style={{ animation: actualView === 3 ? "Appearing 2s 1" : "none" }}
          >
            <h2>Assistance</h2>
            <p>
              Besoin d'un coup de main ? Nous installons ensemble vos
              équipements (Box, TV, CPL... etc.) <br /> Je suis également à
              votre disposition Pour vous apprendre les fondements de
              l'informatique.
            </p>
            <ul>
              <li>Installation et configuration internet & TV</li>
              <li>Gestion de périphériques</li>
              <li>Cablâge réseau domestique</li>
              <li>Prise en main du matériel</li>
              <li>Maintenance</li>
            </ul>
            <Link href={"/help"}>
              <button>En savoir plus</button>
            </Link>
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
    button {
      opacity: 0.8;
      padding: 15px;
      background: transparent;
      color: #fafafa;
      border: 1px solid #fafafa;
      border-radius: 5px;
      margin: auto;
      transition: 0.2s;
      cursor: pointer;
    }
    button:hover {
      color: #373737;
      background: #fafafa;
    }

    #landing {
      margin-bottom: -30vh;
      width: 90vw;
      height: 50vh;
      display: flex;

      button {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
`;

export default Home;
