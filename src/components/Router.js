import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";

import * as route from "constants/routes";

import Main from "components/Main";
import Home from "components/Home";
import MyGithub from "components/MyGithub";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={route.MAIN} component={Main} />
        <Route path={route.HOME} component={Home} />
        <Route path={route.GITHUB} component={MyGithub} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;