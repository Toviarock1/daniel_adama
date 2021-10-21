import React from 'react'
//reactstrap
import { Container, Row, Col } from 'reactstrap'
//react-icons
import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
//component
import Form from '../../components/Form/Form'
//css modules
import classes from './Contact.module.css'

const Contact = (props) => {
    
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
                            submit={props.submit} 
                            toggle={props.toggle} 
                            modal={props.modal} 
                            setFirstName={props.setFirstName} 
                            firstName={props.firstName} 
                            setLastName={props.setLastName} 
                            lastName={props.lastName} 
                            setEmail={props.setEmail}
                            email={props.email}
                            setMessage={props.setMessage}
                            message={props.message} 
                            loading={props.loading} 
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
