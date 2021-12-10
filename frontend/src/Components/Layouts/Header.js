import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
const Header = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Best Web Developer || Sagar Singh</title>
                <meta name="description" content="Looking for Best Web Developer & Digital Marketing, SEO in Mumbai. I Build Awesome & Affordable Websites for Small Businesses & Non-Profits." />
                <meta name="keywords" content="Web developer, full stack web developer, web development company, freelance web designer, mobile development, ecommerce web design" />
                <link rel="canonical" href="https://www.sagarsingh.tech/" />
                {/*  */}
                <meta name="description" content="best web developer which can fulfill your bussiness need with great and innovative technologies " />
                <meta name="description" content="best React js and node js developer in mumbai" />
                <meta name="language" content="en" />
                <meta name="Expires" content="never" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="Daily" />
                <meta name="Author" content="https://www.sagarsingh.tech/" />
                <meta name="Distribution" content="Global" />
                <meta name="Rating" content="general" />
                <meta name="region" content="India" />
                <meta name="geo.region" content="Mumbai" />
                <meta name="search engines" content="ALL" />
                <meta name="copyright" content="sagarsingh.tech" />

                <meta property="og:url" content="https://www.sagarsingh.tech" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="Best Web Developer in Mumbai | Professional & affordable"
                />
                <meta
                    property="og:description"
                    content="This is Sagar Singh. Web Application Developer from Mumbai, Maharashtra. I can help you build your next product. I am your professional web developer, I design, build, operate & sometimes rescue full-stack web applications. I develop High quality, search engine friendly and appealing Web Applications"
                />
                <meta
                    property="og:image"
                    content="https://www.sagarsingh.tech/icon.png"
                />
            </Helmet>
            <div className="navbar-area header-sticky">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html">SAGAR</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                                {/* <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li> */}
                                <li className="nav-item"><a className="nav-link" href="#works">Works</a></li>
                                {/* <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>0 */}
                                <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                                <li className="nav-item pr-0"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Header