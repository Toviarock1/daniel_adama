import React from 'react'
import Header from './../../container/Header/Header';
import Footer from '../../components/Footer/Footer';

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
