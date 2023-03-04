import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom"

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const redirect = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      phone: (phone),
      password: (password) 
    };

    const response = await fetch('https://sinatra-react-project.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    if (data.success) {
      // Handle successful login
      
      redirect('/home')
      console.log('Login successful:', data.user);
    } else {
      // Handle error
      setErrorMessage(data.error);
      alert("wrong password")
    }
  }

  return (
    <section>
      <div >
        <div >
          <form onSubmit={handleSubmit}  >
            <h2 >Login</h2>
            <div >
              <input  type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <label form=""  >Phone</label>
            </div>
            <div >
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label form=""  >Password </label>
            </div>

              <button  type="submit">Login</button>
            
            <div >
              <p >Don't have an account? <Link  to="/">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* <div>
    <div ="form-container">
      <h2 ="header">Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <div ="form-wrapper">
        
          
          <label>
            Password:
            <input ="form-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button ="form-btn" type="submit">Login</button>
        </div>

      
    </div>
    </div> */



    
export default Login;