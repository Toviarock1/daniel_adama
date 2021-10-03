import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Form from './Form/Form'
import classes from './Contact.module.css'

const Contact = () => {
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
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
