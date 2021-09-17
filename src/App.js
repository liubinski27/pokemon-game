import { useState } from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";

import style from "./style.module.css";

const App = () => {
  const match = useRouteMatch('/');
  return (
    <Switch>

      <Route path="/404" component={NotFoundPage} />

      <Route>
        <>
          <HeaderMenu bgActive={!match.isExact} />
          <div className={classNames(style.wrap, {
            [style.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>

    </Switch>
  )
}

export default App;