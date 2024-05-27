import React from 'react'
import wawaLogo from '../assets/images/Wawa-Logo.png';


const WelcomeBar = () => {
  
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();

  return (
    <nav className = "navbar">

      <h1>Welcome <a className = "welcome"> USERNAME</a></h1>

      <ul>
        <li>{month} {day}</li>
        <li>Store STORE NUMBER</li>
        <li><a href = "/">Logout</a></li>
        <li><img src={wawaLogo} className="wawa_logo" alt="Wawa Logo" /></li>
      
      
      
      </ul>
      
      

      




    </nav>
  )
}

export default WelcomeBar