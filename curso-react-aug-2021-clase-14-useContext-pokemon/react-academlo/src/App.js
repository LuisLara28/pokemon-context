import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

//Styles
import "./App.css";
//Components
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

//Context
import { TeamProvider } from "./context/TeamContext";

const App = () => {
  return (
    <TeamProvider>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/team" exact>
              <Team />
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </TeamProvider>
  );
};

export default App;
