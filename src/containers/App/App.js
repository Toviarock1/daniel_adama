import React, { useState, useEffect } from "react";
//react-router-dom
import { Route, Switch } from "react-router-dom";
//components
import Demo from "../../views/Demo/Demo";
import Home from "../Home/Home";
import Layout from "../../hoc/Layout/Layout";
//videos
import RealtimeFaceRecognitionVideo from "./../../assets/videos/face_recognition.mp4";
import AIBodyDecoderSystemVideo from "./../../assets/videos/AI-Body-Decoder-System.mov";
import AIHandGestureRecognitionVideo from "./../../assets/videos/AI-Hand-Gesture-Recognition.mov";
//css
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, SetNavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeBackgroundHandler = () => {
    if (window.scrollY >= 88) {
      SetNavbar(true);
    } else {
      SetNavbar(false);
    }
  };

  useEffect(() => {
    changeBackgroundHandler();
    window.addEventListener("scroll", changeBackgroundHandler);
  });

  console.log('App Rendering');
  return (
    <Layout toggle={toggle} navbar={navbar} isOpen={isOpen}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project/Realtime-Face-Recognition">
          <Demo video={RealtimeFaceRecognitionVideo} />
        </Route>
        <Route exact path="/project/AI-Hand-Gesture-Recognition">
          <Demo video={AIHandGestureRecognitionVideo} />
        </Route>
        <Route exact path="/project/AI-Body-Decoder-System">
          <Demo video={AIBodyDecoderSystemVideo} />
        </Route>
        <Route>
          <div>
            <h1>404</h1>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
