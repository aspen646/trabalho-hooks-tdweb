import React from 'react';
import './style.css';

import {  } from 'react-icons/md';

import { Body, Header } from './PageStyle';

import arthur from './assets/arthur.jpeg';


function Page() {
  return (
    <Body>
      <Header>
        <p>
         CONTEXT API
        </p>
      </Header>
      <div>
        <div>
          <div className="titulo-container">
            <h1 className="titulo">
              Theme Switcher
            </h1>
            <div className="titulo-texto">
              Este é um Theme Switcher desenvolvido com a Context API e Styled Components.
            </div>
          </div>
          <div className="materia-container">
            <div className="titulo">
              Matéria: Tópicos em Desenvolvimento Web
            </div>
            <div className="docente">Docente: Eduardo Augusto Costa Trindade</div>
          </div>
          <div className="grupo-container">
            <h3>
              Grupo:
            </h3>
            <div className="grupo-integrantes-container">
              <div className="arthur">
                <img src={arthur} className="foto-integrante"/>
                <div className="nome-integrante">Arthur Henrique</div>
                <div className="redes-sociais">
                  <div className="git">github/arthur</div>
                  <div className="instagram">instagram</div>
                  <div className="linkedin">linkedin</div>
                </div>
              </div>
              <div className="saulo">
              <img src={arthur} className="foto-integrante"/>
                <div className="foto-integrante"></div>
                <div className="nome-integrante">Saulo José</div>
                <div className="redes-sociais">
                  <div className="git">github/arthur</div>
                  <div className="instagram">instagram</div>
                  <div className="linkedin">linkedin</div>
                </div>
              </div>
              <div className="wesley">
              <img src={arthur} className="foto-integrante"/>
                <div className="foto-integrante"></div>
                <div className="nome-integrante">Wesley Gomes</div>
                <div className="redes-sociais">
                  <div className="git">github/arthur</div>
                  <div className="instagram">instagram</div>
                  <div className="linkedin">linkedin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Page;
