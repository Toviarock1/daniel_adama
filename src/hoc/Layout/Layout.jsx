import React from 'react';
//components
import Header from '../../views/Header/Header';
import Footer from '../../views/Footer/Footer';


const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
