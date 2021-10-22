import React from 'react';
//components
import Header from '../../views/Header/Header';
import Footer from '../../views/Footer/Footer';


const Layout = (props) => {
    return (
        <>
            <Header isOpen={props.isOpen} navbar={props.navbar} toggle={props.toggle} />
            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Layout
