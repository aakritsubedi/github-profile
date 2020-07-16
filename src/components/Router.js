import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";

import * as route from "constants/routes";

import Main from "components/Main";
import Home from "components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={route.MAIN} component={Main} />
        <Route path={route.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;