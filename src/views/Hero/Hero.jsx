import React from 'react';
//react-router-hash-link
import { HashLink as Link } from 'react-router-hash-link';
//reactstrap
import { Col, Container, Row } from 'reactstrap';
//svg
import HeroImage from './../../assets/svgs/deconstructed-robot-animate.svg';
//css modules
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <Container className={classes.HeroBgImage}>
                <Row className={classes.HeroRow}>
                    <Col className="m-auto">
                        <div className={classes.HeroTextContent}>
                            <h1>Daniel E Adama</h1>
                            <p>Machine Learning Engineer</p>
                            <Link to="/#portfolio" className="btn btn-primary PrimaryBtn">My Work</Link>
                        </div>
                    </Col>
                    <Col>
                        <img className={classes.HeroImage} src={HeroImage} alt="scientists making a robot" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;
