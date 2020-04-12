import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/Alert/AlertState";

const App = () => {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path={"/about"} component={About} />
            <Route path={"/"} exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
};

export default App;
