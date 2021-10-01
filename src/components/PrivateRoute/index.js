import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={props =>
                    localStorage.getItem('idToken') ?
                        <Component {...props} /> :
                        <Redirect to="/" />
                }
            />
        </div>
    );
};

export default PrivateRoute;