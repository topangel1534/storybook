import { useNavigate } from 'react-router-dom';
import './index.scss';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page dark">
      <div className="main-container">
        <div className="main-title">
          <p>Welcome to</p>
          <p>Storybook</p>
        </div>
        <div className="login" onClick={() => navigate('/login')}>
          LOG IN
        </div>
        <div className="divider">
          <div></div>
          <p>No account yet?</p>
          <div></div>
        </div>
        <div className="sign-up" onClick={() => navigate('/signup')}>
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default Main;
