import { Route, Switch } from "react-router-dom";
import "./App.css";
import Demo from "./components/Demo/Demo";
import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/Layout";

function App(props) {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project/">
          <Demo />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
