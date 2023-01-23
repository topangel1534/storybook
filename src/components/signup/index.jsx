import { useState, useEffect } from 'react';
import GoogleIcon from '../../assets/images/gmail.png';
import DarkGoogleIcon from '../../assets/images/dark-gmail.png';

import './index.scss';

const dark = false;

const SignUp = () => {
  const [emailFlag, setFlagEmail] = useState(false);
  const [gmailFlag, setFlagGmail] = useState(false);
  const InitialContent = () => {
    return (
      <>
        <div className="title">Storybook</div>
        <div className="email-sign-btn" onClick={() => setFlagEmail(true)}>
          SIGN UP WITH EMAIL
        </div>
        <div className="divider-caption">
          <div></div>
          <div>or sign up with</div>
          <div></div>
        </div>
        <div className="google-sign-btn">
          <img src={dark ? DarkGoogleIcon : GoogleIcon} alt="Google icon" />
        </div>
      </>
    );
  };

  const EmailContent = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {}, [email, name, password]);

    const signUp = () => {
      console.log(email, name, password);
    };

    return (
      <div className="email-sign-form">
        <div className="title">Storybook</div>
        <input className="email-field" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="name-field" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="password-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <div className="sign-up-button" onClick={signUp}>
          SIGN UP
        </div>
      </div>
    );
  };

  return (
    <div className="sign-up">
      <div className="sign-up-container">
        {!emailFlag && !gmailFlag && <InitialContent />}
        {emailFlag && <EmailContent />}
      </div>
    </div>
  );
};

export default SignUp;
