import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/'>
      <App />
    </Router>
  </StrictMode>,
)
