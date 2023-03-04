import { useState } from 'react';
import { useNavigate, Link } from'react-router-dom';

function Register() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const redirect = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://sinatra-react-project.onrender.com/users', {
      method: 'POST',
      body: JSON.stringify({ phone, password, name, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.success) {
      // Handle successful user creation
      redirect('/login')
      console.log('New user created:', data);
    } else {
      // Handle error
      setErrorMessage(data);
    }
  }

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form-form" >
            <h2 className="form-header">Login</h2>
            <div className="inputbox">
              <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <label form="" className="form-label" >Name</label>
            </div>
            <div className="inputbox">
              <input className="form-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label form="" className="form-label" >Email</label>
            </div>
            <div className="inputbox">
              <input className="form-input" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <label form="" className="form-label" >Phone</label>
            </div>
            <div className="inputbox">
              <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label form="" className="form-label" >Password </label>
            </div>

              <button className="form-btn" type="submit">Create Account</button>
            
            <div className="register">
              <p className="p1">Already have an account? <Link className="link1" to="/">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


{/* <div>
      <h2>Create User</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Create User</button>
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div> */}


export default Register;