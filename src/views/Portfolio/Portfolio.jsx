import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from 'rc-scroll-anim';
import Card from '../../components/Card/Card';
import classes from './Portfolio.module.css';

const Portfolio = () => {
    return (
        <div className={classes.Portfolio} id="portfolio">
            <h2 className="Title Center">Portfolio</h2>
            <Container className={classes.PortfolioContent}>
                <Row className="ResponsiveRow">
                    <Col className="ResponsiveMargin">
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="AI Body Decoder System"
                                text="Successfully built an Artificial Intelligent Body Decoder System
                                using Sklearn, OpenCV, etc. to identify when a person is Sad,
                                Happy, Neutral, Wakanda and Victorious."
                                builtWith="Sklearn OpenCV"
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/AI_Body_Decoder"
                            />
                        </Parallax>
                    </Col>
                    <Col className="ResponsiveMargin">
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="Covid-19 Face Mask Detector"
                                text="Successfully completed a Covid-19 face mask detector using
                                deep learning frameworks to identify whether a person is with a
                                face mask or not in real-time."
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/Covid-19-Face-Mask-Detection"
                            />
                        </Parallax>
                    </Col>
                    <Col>
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="Keyword Extraction Project"
                                text="Successfully built a model for automated tag extraction that
                                simplifies the process of identifying relevant terms inside
                                unstructured text."
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/Keyword-Extraction-project"
                            />
                        </Parallax>
                    </Col>
                </Row>
                <Row className="ResponsiveRow">
                    <Col className="ResponsiveMargin">
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="Hand Sign Recognition"
                                text="Successfully completed a Hand Sign Recognition System using
                                Sklearn, OpenCV, etc. to identify gestures like Cool, Peace, Hi,
                                and One."
                                builtWith="Sklearn OpenCV"
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/Hand_Sign_recognition"
                            />
                        </Parallax>
                    </Col>
                    <Col className="ResponsiveMargin">
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="Optical Character Recognition
                                with Pytesseract"
                                text="Successfully achieved an Optical Character Recognition with
                                Pytesseract to appreciate text in an image and print it out in
                                real-time."
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/OCR_pytesseract"
                            />
                        </Parallax>
                    </Col>
                    <Col>
                        <Parallax
                            animation={{ scale: 1 }}
                            style={{ transform: 'scale(0)', margin: '10px auto' }}
                            always={false}
                        >
                            <Card
                                title="Sarcasm Classifier"
                                text="Successfully finished a sarcasm sentiment analysis detector
                                using deep learning frameworks to classify whether a sentence
                                is sarcastic or not."
                                btn="Live Demo"
                                btn2="View Source"
                                location="https://github.com/danielAdama/Sarcasm_detection"
                            />
                        </Parallax>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;
