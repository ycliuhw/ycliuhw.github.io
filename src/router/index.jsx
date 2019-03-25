import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { Link, Route, Redirect } from 'react-router-dom';

import UserContext from '../context/user-context';
import { isAuthenticated } from '../utils'
import { COOKIE_NAME_TOKEN } from '../constants';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(UserContext);
  const [cookies, setCookie] = useCookies([COOKIE_NAME_TOKEN]);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated(context, cookies) ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
}
