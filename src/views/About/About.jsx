import React from "react";
//reactstrap
import { Container, Row, Col } from "reactstrap";
//animation
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
//images
import ProfilePic from "./../../assets/images/crop_profile_pic.jpg";
//css modules
import classes from "./About.module.css";

const About = () => {
  const ScrollOverPack = ScrollAnim.OverPack;
  return (
    <div className={classes.About} id="about">
      <Container>
        <Row className={classes.AboutRow}>
          <Col>
            <Parallax
              always={false}
              animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <img
                className={classes.ProfilePic}
                src={ProfilePic}
                alt="potrait of daniel"
              />
            </Parallax>
          </Col>
          <Col>
            <h2 className="Title">About Me</h2>
            <ScrollOverPack always={false}>
              <QueueAnim delay={400}>
                <p key="a" className={classes.Description}>
                  Daniel is a performance-driven and experienced Machine
                  Learning Engineer with a Bachelor's degree in Information and
                  Communication Engineering who is proficient in Python with
                  2.3+ years of designing and developing Machine learning and
                  Deep learning pipelines for Data Analytics and Computer Vision
                  use-cases capable of making critical predictions in the
                  Recruitment Industry. He has expertise in Data
                  preparation/cleansing, Model building, Model Deployment, and
                  evaluating algorithms to improve performance, quality, and
                  accuracy for Regression (Linear/Logistic, Lasso and Ridge),
                  Classification (Binary/Multi-label), Gradient Boosting, KNN,
                  Object Detection and Tracking, Natural Language Processing
                  (Sentiment Analysis), and Recommender Systems (Content-based).
                  Skilled at optimizing Convolutional Neural Networks and
                  employing Deep Learning methodologies to ensure effective
                  strategy formulation and implementation and looking forward to
                  applying the acquired gamut of skills to a challenging role in
                  the Machine and Deep learning space.
                </p>
                <p key="b" className={classes.Description}>
                  <b>Achievements:</b>
                  <br />- Participated in the Analytics Vidhya JOB-A-THON
                  competition and got a position of 454/1181 participants.
                </p>
                <p key="c" className={classes.Description}>
                  <b>Key Skills:</b>
                  <br />- Computer Vision
                  <br />- Exploratory Data Analysis
                  <br />- Natural Language Processing
                </p>
                <p key="d" className={classes.Description}>
                  <b>Database:</b>
                  <br />
                  -MySQL
                </p>
                <p key="e" className={classes.Description}>
                  <b>DevOps:</b>
                  <br />
                  -Docker
                </p>
                <p key="f" className={classes.Description}>
                  <b>App development tools:</b>
                  <br />
                  -Flask, HTML5,CSS
                </p>
                <p key="g" className={classes.Description}>
                  <b>Deployment:</b>
                  <br />
                  -Heroku
                </p>
                <p key="h" className={classes.Description}>
                  <b>API Testing Tool:</b>
                  <br />
                  -Postman
                </p>
                <p key="i" className={classes.Description}>
                  Linux, and Version Control with Git.
                </p>
                <p key="j" className={classes.Description}>
                  <b>
                    Some Python Machine Learning/Deep Learning packages I have
                    worked with are:
                  </b>
                  <br />- Numpy, Scikit-learn, Pandas, Tensorflow 2,
                  Statsmodels, DeepSpeech, Keras, OpenCV, Scrapy, Mediapipe,
                  Face_recognition, Dlib, Imutils, Matplotlib, Pyaudio, Seaborn,
                  BeautifulSoup, Nltk, Basemap.
                </p>
                <p key="k" className={classes.Description}>
                  <b>Github:</b>{" "}
                  <a href="https://github.com/danielAdama">
                    https://github.com/danielAdama
                  </a>
                </p>
                <p key="l" className={classes.Description}>
                  <b>My Contact:</b> <br />
                  Email:
                  <a href="adamadaniel321@gmail.com">
                    adamadaniel321@gmail.com
                  </a>
                  <br />
                  Phone number: +2348133108645
                </p>
              </QueueAnim>
            </ScrollOverPack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(About);
