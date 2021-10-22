import React from 'react'
//reactstrap
import { Container, Row, Col } from 'reactstrap';
//animation
import { Parallax } from 'rc-scroll-anim';
//component
import Card from '../../components/Card/Card';
//images
import RealTimeFaceRecognitionImage from './../../assets/images/real-time-face-recognition.png';
import AIHandRecognitionSystemImage from './../../assets/images/AI-hand-recognition-system.png';
import AIBodyDecoderSystemImage from './../../assets/images/AI-body-decoder-system.png';
//css modules
import classes from './Portfolio.module.css';

const Portfolio = () => {
    console.log('Portfolio Rendering');
    return (
        <div className={classes.Portfolio}>
            <h2 className="Title Center" id="portfolio">Portfolio</h2>
            <Container className={classes.PortfolioContent}>
                <Row className="ResponsiveRow">
                    <Col className="ResponsiveMargin">
                        <Parallax
                            always={false}
                            animation={{ x: 0, scale: 1, opacity: 1, playScale: [0.2, 0.8] }}
                            style={{ transform: 'scale(0)', opacity: 0 }}
                        >
                            <Card
                                title="Realtime Face Recognition"
                                text="Completed a real-time Face Recognition system that recognizes and tags known faces"
                                builtWith="Dlib OpenCV Imutils"
                                githubLocation="https://github.com/danielAdama/AI_Body_Decoder"
                                projectImg={RealTimeFaceRecognitionImage}
                                alt="Realtime Face Recognition"
                                url="Realtime-Face-Recognition"
                            />
                        </Parallax>
                    </Col>
                    <Col className="ResponsiveMargin">
                        <Parallax
                            always={false}
                            animation={{ x: 0, scale: 1, opacity: 1, playScale: [0.3, 0.8] }}
                            style={{ transform: 'scale(0)', opacity: 0 }}
                        >
                            <Card
                                title="AI Hand Gesture Recognition"
                                text="Successfully completed a Hand Sign Recognition System to identify gestures like Cool, Peace, Hi,
                                and One."
                                builtWith="Sklearn OpenCV"
                                githubLocation="https://github.com/danielAdama/Hand_Sign_recognition"
                                projectImg={AIHandRecognitionSystemImage}
                                alt="AI Hand Gesture Recognition"
                                url="AI-Hand-Gesture-Recognition"
                            />
                        </Parallax>
                    </Col>
                    <Col className="ResponsiveMargin">
                        <Parallax
                            always={false}
                            animation={{ x: 0, scale: 1, opacity: 1, playScale: [0.4, 0.8] }}
                            style={{ transform: 'scale(0)', opacity: 0 }}
                        >
                            <Card
                                title="AI Body Decoder System"
                                text="Successfully built an Artificial Intelligent Body Decoder System to identify when a person is Sad,
                                Happy, Neutral, Wakanda and Victorious."
                                builtWith="Sklearn OpenCV"
                                githubLocation="https://github.com/danielAdama/AI_Body_Decoder"
                                projectImg={AIBodyDecoderSystemImage}
                                alt="AI Body Decoder System"
                                url="AI-Body-Decoder-System"
                            />
                        </Parallax>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default React.memo(Portfolio);
