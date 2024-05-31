import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./styles/WelcomeBar.css"
import "./styles/Picker.css"
import "./styles/Login.css"
import './styles/AddEmployee.css';

import {UserProvider} from '/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserProvider>
    
      <App />
    </UserProvider>
    
      
    
    
  </React.StrictMode>,
)
