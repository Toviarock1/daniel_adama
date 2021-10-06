import React from 'react'
import Header from '../../views/Header/Header';
import Footer from '../../views/Footer/Footer';

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
