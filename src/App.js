import { Route, Switch } from "react-router-dom";
import "./App.css";
import Demo from "./components/Demo/Demo";
import Home from "./components/Home/Home";

function App(props) {
  console.log(props);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project/">
          <Demo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
