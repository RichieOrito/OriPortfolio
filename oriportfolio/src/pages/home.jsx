import React from 'react';

import meImage from '../Assets/images/me2.jpg'
import myCv from '../Assets/PDF/Richard_Orito_Omondi_CV.pdf'
import '../styles/home/home.css';

const Home = () => {
  return (
    <header className="section sec sec1 header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="header-shape"></div>
          <div className="image">
            <img src={ meImage } alt="Me" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hello, I'm <span>Richie Orito</span>.
            A FullStack Developer
          </h1>
          <p>
            My passion is in developing both client-side and server-side software.
            Main specialty is working with Front-End technologies to bring visuality in a
            simple way, to communicate and interact with users without making them break
            even a single sweat.
          </p>
          <div className="btn-container">
            <a href={ myCv } target="_blank" rel="noopener noreferrer" className="main-btn">
              <span className="btn-text">Download Cv</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
