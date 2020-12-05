import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import { Home } from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
