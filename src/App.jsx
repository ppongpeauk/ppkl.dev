import { useState, useEffect, useContext, useRef } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { NavContext } from './contexts/NavContext';
import { LoadContext } from './contexts/LoadContext';

import { Helmet } from 'react-helmet';

import './App.css'
import 'animate.css';
import Home from './pages/Home'
import Project from './pages/Project'
import ProjectList from './pages/ProjectList'
import NotFound from './pages/NotFound'

import Loading from './components/Loading';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ReturnToTopButton from './components/ReturnToTopButton';

function App() {
  const { isLoading, setLoading } = useContext(LoadContext) || { isLoading: true };
  const { theme, setTheme } = useContext(ThemeContext) || { theme: 'light' };
  const { navBackground, setNavBackground } = useContext(NavContext) || { navBackground: false };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    })
  }, [])

  return (
    <Router>
      <div className="eve" data-theme={theme} >
        <Loading active={isLoading} />
        <Helmet titleTemplate='%s — Pete Pongpeauk' defaultTitle='EVE' />
        <Nav />
        <ReturnToTopButton />
        {/* <SocialBar /> */}
        {
          isLoading ? null : <>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<ProjectList />} />
              <Route path='/projects/:projectName' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </>
        }
        <Footer />
      </div>
    </Router>
  )
}

export default App
