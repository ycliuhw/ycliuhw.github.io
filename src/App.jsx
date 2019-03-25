import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import MainLayout from './Layout';
import { LoginPage, ProfilePage } from './pages';
import { PrivateRoute } from './router';

const App = props => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <MainLayout>
            <PrivateRoute path="/" component={ProfilePage} exact />
            <PrivateRoute name="profile-view" path='/profile' component={ProfilePage} />
            <Route name="login-view" path='/login' component={LoginPage} />
          </MainLayout>
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
