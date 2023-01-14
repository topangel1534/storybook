import Logo from 'assets/images/logo.png';
import './index.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Storybook AI Logo" />
    </div>
  );
};

export default Header;
