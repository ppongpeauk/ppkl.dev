import { useState, useEffect, useContext, useRef } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ThemeContext } from './contexts/ThemeContext';
import { NavContext } from './contexts/NavContext';
import { LoadContext } from './contexts/LoadContext';

import './App.css'
import 'animate.css';

import Home from './pages/Home'
import Project from './pages/Project'
import ProjectList from './pages/ProjectList'
import NotFound from './pages/NotFound'

import Cursor from './components/Cursor';
import Loading from './components/Loading';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ReturnToTopButton from './components/ReturnToTopButton';

function App() {
  const [isLoading, setLoading] = useContext(LoadContext);
  const { theme, setTheme } = useContext(ThemeContext) || { theme: 'light' };
  const { navBackground, setNavBackground } = useContext(NavContext) || { navBackground: false };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    })
  }, [])

  return (
    <Router>
      <div className="eve" data-theme={theme} >
        <Helmet titleTemplate='%s — Pete Pongpeauk' defaultTitle='EVE' />
        <Cursor />
        <Loading active={isLoading} />
        <Nav />
        <ReturnToTopButton />
        {/* <SocialBar /> */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<ProjectList />} />
          <Route path='/projects/:projectId' element={<Project />} />
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
