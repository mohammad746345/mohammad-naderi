import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component,statusChecker,newPath, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            statusChecker() === "true" ?
              <Component {...props} />
            : <Redirect to={newPath} />
        )} 
        />
       
    );
};

export default PrivateRoute;