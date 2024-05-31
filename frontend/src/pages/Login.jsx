// Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '/UserContext'; // Ensure correct path
import '../styles/Login.css'; // Import the CSS file


const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      
      const res = await axios.post('http://localhost:1121/login', { email, password });
      if (res.data.status === 'exist') {
        setUser(res.data.user); // Store the entire user object in context
        console.log('User:', res.data.user);
        if(res.data.user.position == 'admin'){
          navigate('/admin_mode');
          return;
        }else if(res.data.user.position == 'general manager'){

          navigate('/gm_mode');
          return;
        }
        
        navigate('/home');
      } else {
        alert(res.data.message || 'Invalid email or password');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('Invalid email or password');
        } else if (error.response.status === 500) {
          alert('Internal server error. Please try again later.');
        } else {
          alert(`An error occurred: ${error.response.data.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from the server. Please try again later.');
      } else {
        console.error('Error during request setup:', error.message);
        alert('An error occurred during login. Please try again later.');
      }
    }
  }

  return (
    <div>
      <h1 className = "loginHeader">Login</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
