// WelcomeBar.jsx
import React, { useContext } from 'react';
import wawaLogo from '../assets/images/Wawa-Logo.png';
import { UserContext} from '/UserContext'; // Ensure correct path

const WelcomeBar = () => {
  const { user } = useContext(UserContext);
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();

  return (
    
    <nav className="navbar">
      <h1>Welcome <a className="welcome">{user.name}</a></h1>
      <ul>
        <li>{month} {day}</li>
        <li>{user.storeNumber ? "Store " + user.storeNumber : ""}</li>
        <li><a href="/">Logout</a></li>
        <li><img src={wawaLogo} className="wawa_logo" alt="Wawa Logo" /></li>
      </ul>
    </nav>

  );
};

export default WelcomeBar;
