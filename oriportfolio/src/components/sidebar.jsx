import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import dark from "../Assets/images/theme/Dim-Night.png";
import light from "../Assets/images/theme/sun-light.png"

import '../styles/sidebar/sidebar.css'

const Sidebar = ({ sectionIds, isDarkMode, toggleDarkMode }) => {

  const handleControlClick = useCallback(
    (index) => {
      return () => {
        const currentBtn = document.querySelector('.active-btn');
        if (currentBtn) {
          currentBtn.classList.remove('active-btn');
        }
        const sectBtn = document.querySelectorAll('.control')[index];
        sectBtn.classList.add('active-btn');
        const id = sectionIds[index];
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
          section.classList.remove('active');
        });
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('active');
        }
      };
    },
    [sectionIds]
  );

  const handleSectionClick = useCallback(
    (id) => {
      return (e) => {
        const sectBtns = document.querySelectorAll('.controls .control');
        sectBtns.forEach((btn) => {
          btn.classList.remove('active-btn');
        });
        e.target.classList.add('active-btn');
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
          section.classList.remove('active');
        });
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('active');
        }
      };
    },
    []
  );

  const handleThemeToggle = useCallback(() => {
    document.body.classList.toggle('light-mode');
  }, []);

  useEffect(() => {
    const sectBtns = document.querySelectorAll('.control');
    sectBtns.forEach((btn, index) => {
      btn.addEventListener('click', handleControlClick(index));
    });

    const allSections = document.querySelector('.main-content');
    if (allSections) {
      allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
          handleSectionClick(id)(e);
        }
      });
    }

    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', handleThemeToggle);
    }

    return () => {
      sectBtns.forEach((btn, index) => {
        btn.removeEventListener('click', handleControlClick(index));
      });

      if (allSections) {
        allSections.removeEventListener('click', handleSectionClick);
      }

      if (themeBtn) {
        themeBtn.removeEventListener('click', handleThemeToggle);
      }
    };
  }, [sectionIds, handleControlClick, handleSectionClick, handleThemeToggle]);

  return (
    <div className="sidebar">
      <div className="controls">
        <Link to='/' className="control control-1 active-btn" data-id={sectionIds[0]}>
          <i className="fas fa-home"></i>
        </Link>
        <Link to='about' className="control control-2" data-id={sectionIds[1]}>
          <i className="fas fa-user"></i>
        </Link>
        <Link to='projects' className="control control-3" data-id={sectionIds[2]}>
          <i className="fas fa-briefcase"></i>
        </Link>
        <Link to='myblogs' className="control control-4" data-id={sectionIds[3]}>
          <i className="fas fa-blog"></i>
        </Link>
        <Link to='contact' className="control control-5" data-id={sectionIds[4]}>
          <i className="fas fa-address-card"></i>
        </Link>
      </div>
      <div className="theme-btn" onClick={toggleDarkMode}>
        {/* Conditional Rendering for the theme toggle button image */}
        {isDarkMode ?  (
          <img src={ light } alt="sun" />
        ) : (
          <img src={ dark } alt="night" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
