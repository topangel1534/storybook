import { useNavigate } from 'react-router-dom';
import './index.scss';

const { REACT_APP_LOGIN_URL, REACT_APP_SIGNUP_URL } = process.env;

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="main-container">
        <div className="main-title">
          <p>Welcome to</p>
          <p>Storybook</p>
        </div>
        <div className="login" onClick={() => navigate(`${REACT_APP_LOGIN_URL}`)}>
          LOG IN
        </div>
        <div className="divider">
          <div></div>
          <p>No account yet?</p>
          <div></div>
        </div>
        <div className="sign-up" onClick={() => navigate(`${REACT_APP_SIGNUP_URL}`)}>
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default Main;
