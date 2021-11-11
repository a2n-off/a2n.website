import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { motion } from 'framer-motion';
import '../styles/_importer.scss';
import 'react-medium-image-zoom/dist/styles.css';
import Cursor from '../component/cursor';

const Home = lazy(() => import('../pages/home'));
const Ai = lazy(() => import('../pages/project/anvil-interactive'));
const Stremho = lazy(() => import('../pages/project/stremho'));
const Acbci = lazy(() => import('../pages/project/acb-ci'));
const Observatory = lazy(() => import('../pages/project/observatory'));

const Wrapper = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>

        <Cursor/>
        <div id="noise"> </div>

        <motion.div
          className="main-container"
          key={Route.name}
          initial="pageInitial"
          animate="pageAnimate"
          transition={{ duration: 0.2 }}
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}>

          <Switch>
            <Route exact path="/project/anvil-interactive" component={Ai}/>
            <Route exact path="/project/stremho" component={Stremho}/>
            <Route exact path="/project/acb-ci" component={Acbci}/>
            <Route exact path="/project/observatory" component={Observatory}/>
            <Route exact path="/" component={Home}/>
          </Switch>

        </motion.div>

      </Suspense>
    </Router>
  )
}

export default Wrapper;
