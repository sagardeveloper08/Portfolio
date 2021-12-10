import React, { Fragment } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Helmet from 'react-helmet'

const App = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Best Web Developer  || Sagar Singh</title>
        <meta name="description" content="Looking for Best Web Developer & Digital Marketing, SEO in Mumbai. I Build Awesome & Affordable Websites for Small Businesses & Non-Profits,best web developer which can fulfill your bussiness need with great and innovative technologies." />
        <meta name="keywords" content="Web developer,	best web designers in Mumbai, full stack web developer, web development company, freelance web designer, mobile development, ecommerce web Development," />
        <link rel="canonical" href="https://www.sagarsingh.tech" />
        <link rel="canonical" href="http://www.sagarsingh.tech" />
        <meta name ="description" content="Best developer in Mumbai"/>
        <meta name="language" content="en" />
        <meta name="Expires" content="never" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="Daily" />
        <meta name="Author" content="https://www.sagarsingh.tech" />
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

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App