import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Picker from './components/Picker'
import WelcomeBar from './components/WelcomeBar'
import { UserProvider } from '/UserContext'
import AdminMode from './pages/AdminMode'
import GMMode from './pages/GMMode'

const App = () => {
  return (
    <div className="App">
      
      <UserProvider>
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin_mode" element={<AdminMode />} />
          <Route path="/gm_mode" element={<GMMode />} />

        </Routes>
      </Router>
      </UserProvider>
      
      
      
    </div>
  )
}

export default App
