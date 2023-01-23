import { useState } from 'react';
import './index.scss';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    console.log(email, password);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">Storybook</div>
        <input placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <p className="forgot-password">Forgot Password?</p>
        <div className="login-button" onClick={login}>
          LOG IN
        </div>
      </div>
    </div>
  );
};

export default Login;
