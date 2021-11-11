import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

          <Routes>
            <Route path="/project/anvil-interactive" element={<Ai/>}/>
            <Route path="/project/stremho" element={<Stremho/>}/>
            <Route path="/project/acb-ci" element={<Acbci/>}/>
            <Route path="/project/observatory" element={<Observatory/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>

        </motion.div>

      </Suspense>
    </Router>
  )
}

export default Wrapper;
