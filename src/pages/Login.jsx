import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import {
  Icon
} from 'antd';
import { Link, Route, Redirect } from 'react-router-dom';


import { InstagramLogin } from '../components';
import UserContext from '../context/user-context';
import { COOKIE_NAME_TOKEN } from '../constants';
import { INSTAGRAM_CLIENT_ID } from "../config";
import { isAuthenticated } from '../utils'


export default props => {

  const context = useContext(UserContext);
  const [cookies, setCookie] = useCookies([COOKIE_NAME_TOKEN]);
  console.error("isAuthenticated(context, cookies)", isAuthenticated(context, cookies), context)
  if (isAuthenticated(context, cookies)) {
    return (
      <Redirect
        to={{
          pathname: "/profile",
          state: { from: props.location }
        }}
      />
    );
  }
  return (
    <InstagramLogin
      implicitAuth
      clientId={INSTAGRAM_CLIENT_ID}
      onSuccess={
        token => {
          setCookie(COOKIE_NAME_TOKEN, token, { path: '/*' });
          context.setToken(token);
        }
      }
      onFailure={(e) => {
        console.error("logging in instagram -> ", e);
        setCookie(COOKIE_NAME_TOKEN, '', { path: '/' });
        context.setToken("");
      }}
    >
      <Icon
        type="instagram"
      // spin
      />
      <span> Login with Instagram</span>
    </InstagramLogin>
  );
}