import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error404 from '../containers/Error404';
import SuperMain from '../containers/SuperMain';
import PreHome from '../containers/PreHome';
import GlobalStyles from '../globalStyles';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext';
import useInitializeState from '../hooks/useInitializeState';

const App = (): JSX.Element => {
  const initialState = useInitializeState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={PreHome} />
            <Layout>
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch>
                  <Route exact path="/projects" component={SuperMain} />
                  <Route exact path="/about" component={SuperMain} />
                  <Route exact path="/contact" component={SuperMain} />
                  <Route component={Error404} />
                </Switch>
              </AnimatePresence>
            </Layout>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
