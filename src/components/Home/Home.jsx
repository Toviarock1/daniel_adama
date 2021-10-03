import React from 'react'
import Layout from '../../hoc/Layout/Layout'
import About from '../About/About'
import Contact from '../Contact/Contact'
import GetInTouch from '../GetInTouch/GetInTouch'
import Hero from '../Hero/Hero'
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <About />
                <GetInTouch />
                <Portfolio />
                <Contact />
            </Layout>
        </div>
    )
}

export default Home
