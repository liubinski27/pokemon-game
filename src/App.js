import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import classNames from "classnames";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";

import style from "./style.module.css";
import 'react-notifications/lib/notifications.css';
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAsync, selectUserLoading } from "./store/user";

const App = () => {

  const isUserLoading = useSelector(selectUserLoading);
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  }, []);

  if (isUserLoading) {
    return 'Loading...';
  }
  return (
    <>
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
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
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
      <NotificationContainer />
    </>
  )
}

export default App;