import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faVirusSlash,
  faBugSlash,
  faFileExport,
  faDownload,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Software = () => {
  return (
    <MainContainer>
      <header>
        <div className="content">
          <h1>Logiciel</h1>
        </div>
        <div id="virus_animation" style={{ height: "40vh" }}></div>
      </header>

      <main>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faVirusSlash} />
            </span>
            Nettoyage Malware & Virus informatiques
          </h2>
          <p>
            Ordinateur qui a un comportement étrange ? <br /> Plus aussi rapide
            qu'avant ? <br /> Vous avez peut-être un virus/malware. Pas de
            panique, nous intervenons rapidement pour nettoyer votre PC de
            toutes menaces.
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faWindows} />
            </span>
            Réinstallation complète Windows toutes versions
          </h2>
          <p>
            Envie de revendre votre ordinateur ? <br /> Envie de remettre votre
            système à zéro ? <br /> Parfois il est bon de nettoyer de fond en
            comble en passant par une réinstallation complète de votre système
            d'exploitation (Windows, Linux...). De plus il est fortement
            conseillé d'effectuer une réinstallation avant une revente afin de
            ne laisser aucunes données personnelles.
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faBugSlash} />
            </span>
            Pannes logicielles
          </h2>
          <p>
            Votre logiciel ne fonctionne plus ? <br />
            L'ordinateur à changé d'apparence ? <br />
            L'imprimante ne se connecte pas/plus ? <br />
            Autant de cas ou nous pouvons intervenir pour vous aider, toujours
            le plus rapidement possible et chez vous !
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Installation logicielle
          </h2>
          <p>
            Vous avez un nouveau logiciel et vous avez besoin d'assistance sur
            son installation/fonctionnement ? <br />
            N'hésitez pas à faire appel à nous !
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faFileExport} />
            </span>
            Récupération de données
          </h2>
          <p>
            Votre ordinateur est tombé en panne et vous avez besoin de récupérer
            vos données ? <br />
            Appelez nous, nous pouvons extraires vos données en peu de temps.
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faGaugeHigh} />
            </span>
            Optimisation des performances et batterie PC
          </h2>
          <p>
            Vous venez d'acheter un PC rempli de logiciels dont vous ne voulez
            pas ? <br />
            Vous voulez rendre à votre PC sa vitesse d'antan ? <br />
            Nous intervenons chez vous pour optimiser tout ce qui peut réduire
            la vitesse ou le temps de batterie de votre ordinateur.
          </p>
        </section>
      </main>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;

  header {
    position: relative;
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
        letter-spacing: 5px;
      }
    }
  }
  main {
    background: url("/ressources/content-background.svg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100vw;
    padding: 8vh 10vw 20vh 10vw;

    h2 {
      font-size: 2rem;
      letter-spacing: 5px;

      span {
        margin-right: 10px;
        color: #cc854c;
      }
    }

    p {
      font-size: 1.3rem;
      line-height: 2rem;
      letter-spacing: 3px;
      padding-left: 50px;
    }
  }
`;

export default Software;
