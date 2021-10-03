import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import GetInTouch from '../GetInTouch/GetInTouch'
import Hero from '../Hero/Hero'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <GetInTouch />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home
