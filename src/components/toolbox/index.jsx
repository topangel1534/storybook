import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faDownload } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Toolbox = () => {
  return (
    <div className="toolbox">
      <div className="tool-btn save-button">
        <FontAwesomeIcon icon={faSave} />
        <p>SAVE</p>
      </div>
      <div className="tool-btn download-all">
        <FontAwesomeIcon icon={faDownload} />
        <p>DOWNLOAD ALL</p>
      </div>
    </div>
  );
};

export default Toolbox;
