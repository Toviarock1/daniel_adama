import React from 'react';
//reactstrap
import { Container, Row, Col } from 'reactstrap';
//animation
import ScrollAnim, { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
//images
import ProfilePic from './../../assets/images/crop_profile_pic.jpg';
//css modules
import classes from './About.module.css';

const About = () => {
    const ScrollOverPack = ScrollAnim.OverPack;
    console.log('About Rendering')
    return (
        <div className={classes.About} id="about">
            <Container>
                <Row className={classes.AboutRow}>
                    <Col>
                        <Parallax
                            always={false}
                            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
                            style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        >
                            <img className={classes.ProfilePic} src={ProfilePic} alt="potrait of daniel" />
                        </Parallax>
                    </Col>
                    <Col>
                        <h2 className="Title">About Me</h2>
                        <ScrollOverPack always={false} >
                            <QueueAnim delay={400}>
                                <p key="a" className={classes.Description}>Daniel is a performance-driven and experienced Machine Learning Engineer who is proficient in python with 1.8+ years in designing
                                    and developing Machine learning and Deep learning pipelines for Computer Vision and Speech Recognition use-case capable of
                                    making critical predictions. He has knowledge in evaluating algorithms to improve performance, quality, and accuracy for Regression
                                    (Linear/Logistic), Object Detection, and Classification (Binary/Multi-label), Recommender Systems (Content-based). Skilled at
                                    optimizing Convolutional Neural Networks and employing Deep Learning methodologies to ensure effective strategy formulation and
                                    implementation. Looking forward to applying the acquired gamut of skills to a challenging role in the Machine and Deep learning
                                    space.
                                </p>
                                <p key="b" className={classes.Description}><b>Plans:</b> Looking for my next full-time machine learning engineer role. I'm also looking forward to learning new technologies and deepening my knowledge of my current skills.</p>
                                <p key="c" className={classes.Description}><b>Skills:</b> Artificial Intelligence, Machine Learning Algorithms, Tensorflow, Deep Learning, Neural Networks (CNN), Supervised Learning, Unsupervised Learning, Natural Language Processing (NLP), Image Processing, Predictive Modelling & Analysis, Data Mining, Computer Vision, Speech Recognition</p>
                                <p key="d" className={classes.Description}><b>Education:</b> Bachelor of Engineering in Information and Communication Engineering Covenant University</p>
                            </QueueAnim>
                        </ScrollOverPack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default React.memo(About);
