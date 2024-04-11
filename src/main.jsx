import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='wrapper'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
