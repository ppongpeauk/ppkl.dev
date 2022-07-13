import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContext';
import NavContextContextProvider from './contexts/NavContext';
import LoadContextProvider from './contexts/LoadContext';

ReactDOM.render(
  <React.StrictMode>
    <LoadContextProvider>
      <ThemeContextProvider>
        <NavContextContextProvider>
          <App />
        </NavContextContextProvider>
      </ThemeContextProvider>
    </LoadContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
