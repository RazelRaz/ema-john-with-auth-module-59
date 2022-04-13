import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/shop')
    }

  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          <p style={{color: 'red'}}>{error?.message}</p>
          {
              loading && <p>Loading....</p>
          }
          <div>
            <input className="form_submit" type="submit" value="Login" />
          </div>
        </form>
        <div>
            <p>New to Ema John? <Link className="form_link" to='/signup'>Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
