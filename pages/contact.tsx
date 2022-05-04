import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <MainContainer>
      <div className="mt-10 max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg pb-24">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {'Comment puis-je vous aider ?'}
            </h2>
            <div className="text-gray-700 mt-8">
              <a href="tel:+33651710497" target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {'06 51 71 04 97'}
                </button>
              </a>
              <a href="mailto:pierregodino.contact@yahoo.com">
                <button
                  type="button"
                  className="inline-block mt-6 px-6 py-3 bg-blue-400 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  {'Pierregodino.contact@yahoo.com'}
                </button>
              </a>

              <h2 className="text-xl mt-4 mb-1">
                <strong>{'Horaires'}</strong>
              </h2>
              <ul>
                <li>
                  <strong>{'Lundi :'}</strong>{' '}
                  <span className="font-extralight ml-3">
                    {'8h00 - 12h00 | 14h00 - 18h30'}
                  </span>
                </li>
                <li>
                  <strong>{'Mardi :'}</strong>{' '}
                  <span className="font-extralight ml-3">
                    {'8h00 - 12h00 | 14h00 - 18h30'}
                  </span>
                </li>
                <li>
                  <strong>{'Mercredi :'}</strong>{' '}
                  <span className="font-extralight ml-3">
                    {'8h00 - 12h00 | 14h00 - 18h30'}
                  </span>
                </li>
                <li>
                  <strong>{'Jeudi :'}</strong>{' '}
                  <span className="font-extralight ml-3">
                    {'8h00 - 12h00 | 14h00 - 18h30'}
                  </span>
                </li>
                <li>
                  <strong>{'Vendredi :'}</strong>{' '}
                  <span className="font-extralight ml-3">
                    {'8h00 - 12h00 | 14h00 - 18h00'}
                  </span>
                </li>
                <li>
                  <strong>{'Samedi :'}</strong>{' '}
                  <i className="text-red-700 ml-3">{'Fermé'}</i>
                </li>
                <li>
                  <strong>{'Dimanche :'}</strong>{' '}
                  <i className="text-red-700 ml-3">{'Fermé'}</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              {'Nom'}
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              {'Email'}
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              {'Message'}
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              {'Envoyer'}
            </button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url('/ressources/contact-background.png');
  margin: 0;
  padding: 0;
  padding-top: 10vh;

  h2 {
    letter-spacing: 5px;
  }

  li {
    letter-spacing: 1px;
  }

  strong {
    letter-spacing: 3px;
  }
`;

export default Contact;
