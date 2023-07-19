import React from "react"

import poverty from '../Assets/images/projects/pov.jpg'
import photography from '../Assets/images/projects/photoCulture.jpg'
import insta from '../Assets/images/projects/instaClone.jpg'
import shoes from '../Assets/images/projects/shoes.jpg'
import pizza from '../Assets/images/projects/pizza.jpg'
import quotes from '../Assets/images/projects/oriQuotes.PNG'

import '../styles/projects/projects.css';


const Projects = () => {
    return (
        <section className="section sec sec3 portfolio" id="portfolio">
            <div className="main-title">
                <h2>My <span>Portfolio</span> <span className="bg-text">My Work</span></h2>
            </div>
            <p className="portfolio-text">
                A few of my Projects and some that am still working on.
            </p>
            <div className="portfolios">
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ poverty } alt="disadntaged children" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source </h3>
                        <p> A Poverty Awarness Web Application</p>
                        <div className="icons">
                            <a href="https://github.com/RichieOrito/HandsOnPoverty" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ shoes } alt="Shoes" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <p> A Shoe E-commerce Webapplication </p>
                        <div className="icons">
                            <a href="https://github.com/RichieOrito/orifeets" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ photography } alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source </h3>
                        <p> A Cultural Photography Website</p>
                        <div className="icons">
                            <a href="https://github.com/RichieOrito/photo-blog" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ insta } alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source </h3>
                        <p> Instagram Clone Using Django</p>
                        <div className="icons">
                            <a href="https://github.com/RichieOrito/HandsOnPoverty" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ pizza } alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source</h3>
                        <p> A Pizza Order Website</p>
                        <div className="icons">
                            <a href="https://github.com/RichieOrito/pizza-innit" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={ quotes } alt="" />
                    </div>
                    <div className="hover-item">
                        <h3>Project Source </h3>
                        <p> Great Quote Application Built with Angular.JS</p>
                        <div className="icons">
                            <a href="https://richieorito.github.io/great-quote/" target="_blank" rel="noreferrer" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )

};

export default Projects;