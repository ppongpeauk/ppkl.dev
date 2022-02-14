import { useState, useEffect, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Helmet } from 'react-helmet';

import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'

import Loading from './components/Loading';
import Nav from './components/Nav'
import SocialBar from './components/SocialBar'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme, setTheme } = useContext(ThemeContext) || { theme: 'light' };

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <Router>
      <div className="eve" data-theme={theme}>
        <Loading active={isLoading} />
        <Helmet titleTemplate='EVE / %s' defaultTitle='EVE' />
        <Nav />
        {/* <SocialBar /> */}
        <Home />
      </div>
    </Router>
  )
}

export default App
