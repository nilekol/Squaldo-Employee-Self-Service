import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import "./styles/WelcomeBar.css"
import "./styles/Picker.css"
import {UserProvider} from '/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserProvider>

      <App />

    </UserProvider>
    
      
    
    
  </React.StrictMode>,
)
