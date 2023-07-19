import React from "react";

import blockchain from '../Assets/images/blogs/blockchain.jpg';
import techie from '../Assets/images/blogs/techie.jpg';
import react from '../Assets/images/blogs/reactjs.jpg';

import '../styles/blogs/myblogs.css';

const Myblogs = () => {
    return(
        <section className="section sec sec4 blogger" id="blogs">
            <div className="blogs-content">
                    <div className="main-title">
                        <h2>My <span>Blogs</span> <span className="bg-text">My Blogs</span></h2>
                    </div>
                    <div className="blogs">
                        <div className="blog">
                            <img src={ techie } alt="a girl coding" />
                            <div className="blog-text">
                                <h4>
                                    Where to start with programming
                                </h4>
                                <p>
                                Embarking on the journey of programming begins with the right mindset. While having access to resources is essential, 
                                it is equally crucial to believe in yourself as an individual. 
                                {/* The key to success lies in starting with the right mindset; it paves the way for the rest of the journey. Although the road ahead may seem long, remember you won't be alone. 
                                Along the way, you'll find like-minded individuals who can be valuable resources and companions on this exciting adventure. Together, you can learn, grow, and achieve great things in the world of programming. 
                                So, take that first step, embrace the challenges, and welcome the opportunities that await you on this remarkable path. */}
                                </p>
                            </div>

                        </div>
                        <div className="blog">
                            <img src={ blockchain } alt="people holding on blocks" />
                            <div className="blog-text">
                                <h4>
                                Is blockchain where we should all be focusing on
                                </h4>
                                <p>
                                Blockchain is a secure and immutable system for recording information, designed to prevent alterations, 
                                hacks, or fraudulent activities.
                                </p>
                            </div>

                        </div>
                        <div className="blog">
                            <img src={ react } alt="React framework" />
                            <div className="blog-text">
                                <h4>
                                Its all about React
                                </h4>
                                <p>
                                React is a freely available, open-source JavaScript library used for creating user interfaces by leveraging UI components.
                                </p>
                            </div>

                        </div>
                    </div>
            </div>
    </section>

    );
};

export default Myblogs;