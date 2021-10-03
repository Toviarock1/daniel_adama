import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Hero />
        <About />
        <GetInTouch />
        <Portfolio />
        <Contact />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
