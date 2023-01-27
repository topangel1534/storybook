import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faDownload } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Toolbox = ({ authenticated, subscription }) => {
  return (
    <div className={cx('toolbox', { public: authenticated, subscription: subscription })}>
      <div className="tool-btn save-button">
        <FontAwesomeIcon icon={faSave} />
        <p>SAVE</p>
      </div>
      <div className={cx('tool-btn download-all')}>
        <FontAwesomeIcon icon={faDownload} />
        <p>DOWNLOAD ALL</p>
      </div>
    </div>
  );
};

export default Toolbox;
