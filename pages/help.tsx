import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faToolbox,
  faBook,
  faHandPeace,
} from '@fortawesome/free-solid-svg-icons';

const Help = () => {
  return (
    <MainContainer>
      <header>
        <div className="content">
          <h1>Assistance</h1>
        </div>
        <div className="area" style={{ backgroundPosition: 'center' }}>
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
      <main>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faToolbox} />
            </span>
            {'Cablâge réseau domestique'}
          </h2>
          <p>
            {
              "Nous pouvons intervenir chez vous pour effectuer l'installation de votre matériel (Box internet, Box TV, Imprimante, CPL...)."
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faHandPeace} />
            </span>
            {'Prise en main du matériel'}
          </h2>
          <p>
            {'Un problème de compréhension de matériel ?'} <br />
            {
              "n'hésitez pas à faire appel à nous pour la prise en main de matériel informatique ou multimédia."
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
            {'Maintenance'}
          </h2>
          <p>
            {"Besoin d'aide avec du matériel que nous avons conseillé ?"} <br />
            {"n'hésitez pas à revenir vers nous."}
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faBook} />
            </span>
            {"Formation à l'informatique"}
          </h2>
          <p>
            {"Vous voulez vous former aux bases de l'informatique ?"} <br />
            {'Ou même à la programmation pour les plus téméraires ?'} <br />
            {'Comptez sur nous.'}
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
    background: url('/ressources/content-background.svg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100vw;
    padding: 8vh 10vw 20vh 10vw;

    h2 {
      font-size: 2rem;
      letter-spacing: 5px;
      margin-bottom: 10px;
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

export default Help;
