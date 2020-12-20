/*
██████╗  ██████╗  ██████╗ ████████╗     █████╗ ██████╗ ██████╗ 
██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗
██████╔╝██║   ██║██║   ██║   ██║       ███████║██████╔╝██████╔╝
██╔══██╗██║   ██║██║   ██║   ██║       ██╔══██║██╔═══╝ ██╔═══╝ 
██║  ██║╚██████╔╝╚██████╔╝   ██║       ██║  ██║██║     ██║     
╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝     
*/
//- Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//-- Components
import GlobalStyles from '../globalStyles';
import Layout from '../components/Layout';
import PreHome from '../containers/PreHome';
import SuperMain from '../containers/SuperMain';
import Error404 from '../containers/NotFound';
//-- Hooks
import AppContext from '../context/AppContext';
import useInitializeState from '../hooks/useInitializeState';

//-- Main Component: the root of the whole App
const App = (): JSX.Element => {
  //-- Variables & Hooks
  const initialState = useInitializeState();
  //-- Render of the whole component tree
  return (
    <>
      <AppContext.Provider value={initialState}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={PreHome} />
            <Layout>
              <Switch>
                <Route exact path="/projects" component={SuperMain} />
                <Route exact path="/about" component={SuperMain} />
                <Route exact path="/contact" component={SuperMain} />
                <Route component={Error404} />
              </Switch>
            </Layout>
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
