import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
