import Logo from 'assets/images/logo.png';
import DarkLogo from 'assets/images/dark-logo.png';

import './index.scss';

const dark = false;

const Header = () => {
  return (
    <div className="header">
      <img src={dark ? DarkLogo : Logo} alt="Storybook AI Logo" />
    </div>
  );
};

export default Header;
