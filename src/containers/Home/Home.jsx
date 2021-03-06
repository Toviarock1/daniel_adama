import React, { useState } from 'react'
//axios
import axios from 'axios'
//components
import About from './../../views/About/About'
import Contact from './../../views//Contact/Contact'
import GetInTouch from './../../views/GetInTouch/GetInTouch'
import Hero from './../../views/Hero/Hero'
import Portfolio from './../../views/Portfolio/Portfolio'

const Home = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    let title = error ? 'Oops Something Went Wrong' : 'Thank You For Your Email';
    let content = error ? 'please check your internet connection and try again' : 'We have received your email we will get back to you shortly';

    const toggle = () => setModal(!modal);

    const sendEmailHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const emailDetails = {
            name: `${firstName} ${lastName}`,
            email: email,
            message: message
        }
        axios.post('https://formsubmit.co/ajax/adamadaniel321@gmail.com', emailDetails)
            .then(res => {
                setLoading(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');            
                setModal(true);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                setModal(true);
            })
    }

    return (
        <>
            <Hero />
            <About />
            <GetInTouch />
            <Portfolio />
            <Contact
                submit={sendEmailHandler}
                toggle={toggle}
                modal={modal}
                setFirstName={(e) => setFirstName(e.target.value)}
                firstName={firstName}
                setLastName={(e) => setLastName(e.target.value)}
                lastName={lastName}
                setEmail={(e) => setEmail(e.target.value)}
                email={email}
                setMessage={(e) => setMessage(e.target.value)}
                message={message}
                loading={loading}
                content={content}
                title={title} 
            />
        </>
    )
}

export default React.memo(Home);
