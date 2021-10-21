import React, { useState, useEffect } from 'react';
//components
import Header from '../../views/Header/Header';
import Footer from '../../views/Footer/Footer';


const Layout = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, SetNavbar] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const changeBackgroundHandler = () => {
        if (window.scrollY >= 88) {
            SetNavbar(true);
        } else {
            SetNavbar(false);
        }
    }

    useEffect(() => {
        changeBackgroundHandler()
        window.addEventListener('scroll', changeBackgroundHandler)
    })
    return (
        <>
            <Header isOpen={isOpen} navbar={navbar} toggle={toggle} />
            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
