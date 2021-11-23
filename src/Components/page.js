import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme';

import Switch from "react-switch";

import arthur from '../assets/arthur.jpeg';
import wesley from '../assets/wesley.png';
import saulo from '../assets/saulo.jpg';
import './style.css';
import githubIcon from '../assets/github.svg';
import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';


function Page() {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme.dark);

  function toggleTheme(){
    setLocalTheme(localTheme == theme.dark ? theme.light : theme.dark);
  }

  return (
    <div className="container" style={localTheme}>
      <header>
        <p style={{margin: 0}}>
         CONTEXT API
        </p>
        <Switch
        onChange={toggleTheme}
        checked={localTheme == theme.dark }
        uncheckedIcon={false}
        checkedIcon={false}
        />
      </header>
      <div>
        <div>
          <div className="titulo-container">
            <h1 className="titulo">
              Theme Switcher
            </h1>
            <div className="titulo-texto">
              Este é um Theme Switcher desenvolvido com o <b>UseContext</b>.
            </div>
          </div>
          <div className="materia-container">
            <div className="titulo">
              <b>Matéria:</b> Tópicos em Desenvolvimento Web
            </div>
            <div className="docente"><b>Docente:</b> Eduardo Augusto Costa Trindade</div>
          </div>
          <div className="grupo-container">
            <h3>
              Grupo:
            </h3>
            <div className="grupo-integrantes-container">
              <div className="integrante">
                <img src={arthur} className="foto-integrante"/>
                <div className="nome-integrante">Arthur Henrique</div>
                <div className="redes-sociais">
                  <a href="https://github.com/aspen646">
                    <img className="icon" src={githubIcon}/>
                  </a>
                  <a href="https://www.instagram.com/arthurhenrique200/">
                    <img className="icon" src={instagramIcon}/>
                  </a>
                  <a href="https://www.linkedin.com/in/henrique-arthur/">
                    <img className="icon" src={linkedinIcon}/>
                  </a>
                </div>
              </div>
              <div className="integrante">
              <img src={saulo} className="foto-integrante"/>
                <div className="foto-integrante"></div>
                <div className="nome-integrante">Saulo José</div>
                <div className="redes-sociais">
                  <a href="https://github.com/saulojcf">
                    <img className="icon" src={githubIcon}/>
                  </a>
                  <a href="https://www.instagram.com/saulo.jcf/">
                    <img className="icon" src={instagramIcon}/>
                  </a>
                  <a href="https://www.linkedin.com/in/saulofigueiredo/">
                    <img className="icon" src={linkedinIcon}/>
                  </a>
                </div>
              </div>
              <div className="integrante">
              <img src={wesley} className="foto-integrante"/>
                <div className="foto-integrante"></div>
                <div className="nome-integrante">Wesley Gomes</div>
                <div className="redes-sociais">
                <a href="https://github.com/wesley-gomes-sje">
                    <img className="icon" src={githubIcon}/>
                  </a>
                  <a href="https://www.instagram.com/wesley.gomes.l/">
                    <img className="icon" src={instagramIcon}/>
                  </a>
                  <a href="https://www.linkedin.com/in/wesley-gomes-b2bb79205/">
                    <img className="icon" src={linkedinIcon}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;