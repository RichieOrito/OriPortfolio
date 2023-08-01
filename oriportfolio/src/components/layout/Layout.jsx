import React, { useState } from 'react';
import Home from '../../pages/home';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import Myblogs from '../../pages/myblogs';
import Contact from '../../pages/contact';
import Routers from '../../routers/routes';
import Sidebar from '../sidebar'

const Layout = () => {

    const sectionIds = ['home', 'about', 'portfolio', 'blogs', 'contact'];
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

  return (
    <>
        <Home />
        <About />
        <Projects />
        <Myblogs />
        <Contact />        
        <div>
            <Routers />
        </div>
        <Sidebar sectionIds={sectionIds} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Layout;