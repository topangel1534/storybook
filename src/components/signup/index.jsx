import GoogleIcon from '../../assets/images/gmail.png';
import './index.scss';

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div className="title">Storybook</div>
        <div className="email-sign-btn">SIGN UP WITH EMAIL</div>
        <div className="divider-caption">
          <div></div>
          <div>or sign up with</div>
          <div></div>
        </div>
        <div className="google-sign-btn">
          <img src={GoogleIcon} alt="Google icon" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
