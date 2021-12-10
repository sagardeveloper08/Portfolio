import React, { Fragment } from "react";
import Contact from "./banner/Contact";
import MainBanner from "./banner/MainBanner";
import Portfolio from "./banner/Portfolio";
import Services from "./banner/Services";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Loader from "./Layouts/Loader";
import { Helmet } from "react-helmet";
const Home = () => {
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
            <div>
                <Loader />
                <Header />
                <MainBanner />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home