import React from 'react';

import myCv from '../Assets/PDF/Richard_Orito_Omondi_CV.pdf'
import '../styles/about/about.css';

function About() {
  return (
    <section className="section sec sec2 about" id="about">
      <div className="main-title">
        <h2>About <span>me</span> <span className="bg-text"> my stats</span></h2>
      </div>
      <div className="about-containter">
        <div className="left-about">
          <p>
            I'm Richard Orito Omondi, a tech enthusiast and problem-solving artist. I'm passionate about emerging 
            technologies and love tackling challenges creatively. Let's explore and innovate together, fueled by 
            our shared love for tech and making a positive impact. Coffee is great, but solving problems excites 
            me even more!
          </p>
          <div className="btn-container">
          <a href={ myCv } target="_blank" rel="noopener noreferrer" className="main-btn">
              <span className="btn-text">Download Cv</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </a>
          </div>
        </div>
        <div className="right-about">
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">20+</p>
              <p className="small-text">Projects <br /> Completed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">1+</p>
              <p className="small-text">years of <br /> experience</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">50+</p>
              <p className="small-text">created <br /> repositories</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">1,500+</p>
              <p className="small-text">contributions <br /> in the last year</p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-stats">
        <h4 class="stat-title">My Skills</h4>
          <div class="progress-bars">
            <div class="progress-bar">
              <p class="progress-title">HTML5</p>
              <div class="progress-container">
                  <p class="progress-text"></p>
                  <div class="progress">
                    <span class="html"></span>
                  </div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">CSS3/SCSS</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="css"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">JavaScript</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="javascript"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">ReactJS</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="react"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">MongoDB</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="mongo"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">ExpressJS</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="express"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">Redux</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="redux"></span>
                    </div>
                </div>
            </div>
            <div class="progress-bar">
              <p class="progress-title">Python</p>
              <div class="progress-container">
                <p class="progress-text"></p>
                <div class="progress">
                  <span class="python"></span>
                </div>
              </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">Django</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="django"></span>
                    </div>
                </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">PostgreSQL</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="postgresql"></span>
                    </div>
                </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">Version Control</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="git"></span>
                    </div>
                </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">NodeJS</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="nodejs"></span>
                    </div>
                </div>
            </div>
            <div class="progress-bar">
                <p class="progress-title">Figma</p>
                <div class="progress-container">
                    <p class="progress-text"></p>
                    <div class="progress">
                        <span class="figma"></span>
                    </div>
                </div>
            </div>
          </div>
            </div>
      <h4 className="stat-title">My Timeline</h4>
      <div class="timeline">
        <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="timeline-duration">
                        September 2022 - February 2023.
                    </p>
                    <h5>Software Engineer Intern<span>- Safaricom PLC</span> </h5>
                    <p>&#x2022;
                    Worked as a Software Engineer in the Technology Department
                    </p>
                    <p>&#x2022;
                    Participated in the full software development lifecycle, from requirements gathering to testing and deployment
                    </p>
                    <p>&#x2022;
                    Collaborated with lead design of technology products and solutions to meet the needs of Safaricom PLC 
                    customers, obtaining the optimum balance between compliance to requirements and delivery times/costs.
                    </p>
                    <p>&#x2022;
                    Overall, my experience as a software engineering intern at Safaricom PLC provided me with 
                    hands-on experience in software development, as well as an understanding of how a software 
                    engineering team operates within a larger organization.
                    </p>
        </div>
        <div class="timeline-item">
            <div class="timeline-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="timeline-duration">
                20th September 2021 - 13th May 2022
            </p>
            <h5>Software Developer<span>- Moringa School</span> </h5>
            <p>&#x2022;
            Graduated from Moringa School, enhancing skills in front-end and back-end technologies 
            in a fast-paced learning environment.
            </p>
            <p>&#x2022;
            Acquired hands-on experience with version control systems like Git, ensuring efficient code collaboration and management.
            </p>
            <p>&#x2022;
            Developed over 20 projects, demonstrating progress in code writing, maintenance, and 
            test implementation with a focus on well-designed UI/UX.
            </p>
            <p>&#x2022;
            Participated in hackathons and coding challenges, honing problem-solving skills and teamwork abilities.
            </p>
            <p>&#x2022;
            Collaborated in a group for the final project, taking the lead in front-end development, 
            and received praise from technical mentors for its professional appearance.
            </p>
        </div>
        <div class="timeline-item">
            <div class="timeline-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="timeline-duration">
                1st September 2020 - 1st September 2021
            </p>
            <h5>Software Developer Intern <span>- Warm Investments</span> </h5>
            <p>&#x2022;
            Contributed to the documentation of technical specifications, user guides, and system architecture diagrams.
            </p>
            <p>&#x2022;
            Implemented and maintained responsive web design and user interfaces, optimizing user experience and accessibility.
            </p>
            <p>&#x2022;
            Worked with external business partners and software platform vendors on technical design 
            and architecture matters.
            </p>
            <p>&#x2022;
            Assisted in system integration, data migration, and implementation of new software solutions.
            </p>
            <p>&#x2022;
            Supported quality assurance and testing efforts to deliver high-quality software products to clients and users.
            </p>
            <p>&#x2022;
            Conducted regular code reviews and contributed to continuous improvement in coding standards and best practices.
            </p>
        </div>
        <div class="timeline-item">
            <div class="timeline-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="timeline-duration">
                September 2018 - April 2020.
            </p>
            <h5>Bachelor of Science in Information Technology<span>- Jomo Kenyatta 
                University of Agriculture and Technology</span> </h5>
                <p>&#x2022;
                Acquired in-depth knowledge and expertise in various aspects of Information Technology 
                during the course.
                </p>
                <p>&#x2022;
                Studied a diverse range of subjects, including programming, database management, networking, 
                systems analysis, and software development.
                </p>
                <p>&#x2022;
                Engaged in hands-on projects and practical assignments to apply theoretical concepts and 
                enhance practical skills.
                </p>
                <p>&#x2022;
                Participated in group projects, fostering teamwork and collaboration in problem-solving and 
                project execution.
                </p>
                <p>&#x2022;
                Gained a solid foundation in computer science and IT principles, preparing for a successful 
                career in the technology industry.
                </p>
        </div>
            </div>
    </section>
  );
}

export default About;
