import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Question from "./pages/Question/Question";
import Commande from "./pages/Commande/Commande";


export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/commande">
            <Commande />
          </Route>
          <Route path="/">
            <Question />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
