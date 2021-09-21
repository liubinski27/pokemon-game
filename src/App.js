import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase"


import style from "./style.module.css";

const App = () => {

  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>

        <Route path="/404" component={NotFoundPage} />

        <Route>
          <>
            <HeaderMenu bgActive={!isPadding} />
            <div className={classNames(style.wrap, {
              [style.isHomePage]: isPadding
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
    </FireBaseContext.Provider>
  )
}

export default App;