import React  from 'react';
import { motion } from 'framer-motion';
import '../styles/_importer.scss';
import 'react-medium-image-zoom/dist/styles.css';
import Cursor from '../component/cursor';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));
const Ai = React.lazy(() => import('../pages/project/anvil-interactive'));
const Stremho = React.lazy(() => import('../pages/project/stremho'));
const Acbci = React.lazy(() => import('../pages/project/acb-ci'));
const Observatory = React.lazy(() => import('../pages/project/observatory'));

const Wrapper = (): JSX.Element => {
  return (
    <Router>

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
          <Route path="/project/anvil-interactive"><Ai/></Route>
          <Route path="/project/stremho"><Stremho/></Route>
          <Route path="/project/acb-ci"><Acbci/></Route>
          <Route path="/project/observatory"><Observatory/></Route>
          <Route path="/"><Home/></Route>
        </Switch>

      </motion.div>

    </Router>
  )
}

export default Wrapper;
