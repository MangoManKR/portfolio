import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import ReactGA from 'react-ga4';

import Loading from './components/loading/Loading';
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from './data/tracking';
import './App.css';

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (TRACKING_ID !== '') {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  const handleLoadingFinish = () => {
    setLoadingFinished(true);

    // 1초 후에 Info 화면을 보여주도록 설정
    setTimeout(() => {
      setShowInfo(true);
    }, 1000);
  };

  useEffect(() => {
    if (loadingFinished) {
      const timer = setTimeout(() => {
        setShowInfo(true);
      }, 100);
  
      return () => clearTimeout(timer);
    }
  }, [loadingFinished]);

  return (
    <div>
      {!loadingFinished && <Loading onFinishLoading={handleLoadingFinish} />}
      {loadingFinished && (
        <div className={showInfo ? 'fade-in' : 'fade-out'}>
          <div className="App">
		      	<Routes>
		      		<Route path="/portfolio" element={<Homepage />} />
		      		<Route path="/about" element={<About />} />
		      		<Route path="/projects" element={<Projects />} />
		      		<Route path="/articles" element={<Articles />} />
		      		<Route path="/article/:slug" element={<ReadArticle />} />
		      		<Route path="/contact" element={<Contact />} />
		      		<Route path="*" element={<Notfound />} />
		      	</Routes>
		      </div>
        </div>
      )}
    </div>
  );
}

export default App;