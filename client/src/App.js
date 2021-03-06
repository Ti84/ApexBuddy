import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing/Landing';
import useAppStyles from './useAppStyles';
import Layout from './components/layout/Layout';
import Profile from './components/profile/Profile';
import NotFoundPage from './components/notfound/NotFoundPage';

const App = () => {
  const classes = useAppStyles();

  return (
    <div className={classes.app}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/:platform/:playerName">
              <Profile />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
