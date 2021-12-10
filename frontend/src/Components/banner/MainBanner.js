import React, { Fragment } from 'react'
import HelmetData from '../Helmet'

const MainBanner = () => {
    return (
        <Fragment>
            {/* <HelmetData/> */}
            <div id="home" className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="main-banner-text">
                                        <h1>Hi! I'm Sagar.</h1>
                                        <h3>
                                            <a href="#" className="typewrite" data-period={2000} data-type="[ &quot;I am Software developer.&quot;, &quot;I am MERN Developer.&quot;, &quot;I am Freelancer.&quot; ]">
                                                <span className="wrap" />
                                            </a>
                                        </h3>
                                        <p>Pleasure in the job puts perfection in the work..<br/>
                                            2+ years pf experience as a Developer
                                        </p>
                                        <ul>
                                            {/* <li><a href="#"><i className="fa fa-facebook" /></a></li> */}
                                            {/* <li><a href="#"><i className="fa fa-twitter" /></a></li> */}
                                            <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                            {/* <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" /></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon href="#about" />
            </div>
            <section id="about" className="about-area bg ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="about-img">
                                <img src="assets/img/image.jpeg" alt="me" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="about-text">
                                <h3>About Me.</h3>
                                <p>I am <b>Sagar Singh.</b> I am a MERN  Developer, and I'm very passionate and
                                    dedicated to my work. With 2.5+ years experience , I have
                                    acquired the skills and knowledge necessary to make your project a success.</p>
                                <ul>
                                    <li><span>Name : </span>Sagar Singh</li>
                                    <li><span>Address : </span>Mumbai,MH</li>
                                    <li><span>Age : </span>23</li>
                                    <li><span>Phone : </span>+918779742206</li>
                                    <li><span>Linkedln : </span>https://www.linkedin.com/in/sagar-singh-0b4ba11a0/</li>
                                </ul>
                                {/* <a href="#" className="btn btn-primary me-3">Download CV <i className="fa fa-download" /></a> */}
                                <a href="#contact" className="btn btn-primary">Hire Me <i className="fa fa-phone" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}

export default MainBanner