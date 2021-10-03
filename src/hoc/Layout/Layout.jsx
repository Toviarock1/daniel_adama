import React from 'react'
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';
import Header from './../../container/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <GetInTouch />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout
