import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Picker from './components/Picker'
import WelcomeBar from './components/WelcomeBar'

const App = () => {
  return (
    <div className="App">
      
      <WelcomeBar/>
      <Picker/>
      
      {/**
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    */}
      
      
      
    </div>
  )
}

export default App
