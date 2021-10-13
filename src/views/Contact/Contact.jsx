import React, { useState } from 'react'
//reactstrap
import { Container, Row, Col } from 'reactstrap'
//react-icons
import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
//axios
import axios from 'axios';
//component
import Form from '../../components/Form/Form'
//css modules
import classes from './Contact.module.css'

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false);

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
                setModal(true)
            })
            .catch(err => {
                setLoading(false);
            })
    }
    return (
        <div className={classes.Contact} id="contact">
            <h2 className="Title Center">Contact</h2>
            <Container className={classes.ContactContent}>
                <Row className="ResponsiveRow">
                    <Col className="ResponsiveMargin">
                        <p><b>Email:</b> adamadaniel321@gmail.com</p>
                        <p><b>Phone No:</b> +2348133108645</p>
                        <Row>
                            <Col>
                                <a href="http://www.linkedin.com/in/danieladama" className={classes.IconWrapper}>
                                    <ImLinkedin />
                                </a>
                            </Col>
                            <Col>
                                <a href="http://github.com/danielAdama" className={classes.IconWrapper}>
                                    <ImGithub />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://twitter.com/danieltovia" className={classes.IconWrapper}>
                                    <ImTwitter />
                                </a>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Form 
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
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
