import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBroom,
  faScrewdriverWrench,
  faGaugeHigh,
  faMagnifyingGlass,
  faCircleInfo,
  faScrewdriver,
} from '@fortawesome/free-solid-svg-icons';

const Hardware = () => {
  return (
    <MainContainer>
      <header>
        <div className="content">
          <h1>{'Matériel'}</h1>
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
      </header>
      <main>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </span>
            {'Diagnostic Panne & réparations'}
          </h2>
          <p>
            {'Ordinateur qui a un comportement étrange ?'} <br />{' '}
            {"Plus aussi rapide qu'avant ?"} <br />{' '}
            {
              'Vous avez peut être un composant défectueux. Pas de panique, nous intervenons rapidement pour réparer tout problème pouvant perturber votre vie numérique.'
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            {'PC sur mesure'}
          </h2>
          <p>
            {"Envie d'un PC ?"} <br />
            {
              "Le faire construire revient souvent moins cher que de l'acheter en magasin."
            }{' '}
            <br />
            {
              "De plus, je travaille avec les derniers composants du marché, ce qui n'est pas toujours le cas chez les revendeurs traditionnels ! "
            }
            <br />
            {
              "Alors n'hésitez plus, optez pour du sur mesure en fonction de vos besoins."
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            {"Conseis d'achat matériel"}
          </h2>
          <p>
            {
              'Vous voulez acheter du matériel informatique/résoudre un problème en particulier ?'
            }{' '}
            <br />
            {
              "Faites appel à notre expertise pour vous aider a trouver ce qu'il vous faut."
            }{' '}
            <br />
            <strong>
              {
                'Pas de vente directe de matériel, nous ne fournissons que des conseils'
              }
            </strong>
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faScrewdriver} />
            </span>
            {
              'Remplacement composant défectueux (clavier, écran, carte vidéo... etc.)'
            }
          </h2>
          <p>
            {'Besoin de réparations sur votre ordinateur ? '}
            <br />
            {
              'Clavier qui ne marche plus, écran cassé, batterie qui ne tient plus...'
            }{' '}
            <br />
            {
              'Confiez nous vos appareils, nous les remettrons en état rapidement.'
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faBroom} />
            </span>
            {'Nettoyage'}
          </h2>
          <p>
            {
              "La poussière est un des plus grands ennemis de vos appareils: elle favorise la chauffe, l'usure et la consommation électrique."
            }{' '}
            <br />
            {
              'Un petit dépoussiérage de temps en temps est essentiel pour garder votre matériel le plus longtemps possible.'
            }
          </p>
        </section>
        <section>
          <h2>
            <span>
              <FontAwesomeIcon icon={faGaugeHigh} />
            </span>
            {'Amélioration PC'}
          </h2>
          <p>
            {'Vous voulez améliorer les performances de votre PC ?'} <br />
            {
              'Passez à la vitesse supérieure avec un disque dur SSD, de la mémoire vive ou bien pourquoi pas un nouveau processeur !'
            }{' '}
            <br />
            {'Il y a toujours mieux à faire ! ;)'}
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

export default Hardware;
