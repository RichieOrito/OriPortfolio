import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/pages/home'
import About from '../src/pages/about';
import Projects from '../src/pages/projects';
import Myblogs from '../src/pages/myblogs';
import Contact from '../src/pages/contact';
import Sidebar from '../src/components/sidebar'

import { BrowserRouter } from 'react-router-dom';

import "./App.css";

const App = () => {

  const sectionIds = ['home', 'about', 'portfolio', 'blogs', 'contact'];

  return (
      <div>
        <BrowserRouter>
          <Home />
          <Sidebar sectionIds={sectionIds} />
          <About />
          <Projects />
          <Myblogs />
          <Contact />
        </BrowserRouter>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
