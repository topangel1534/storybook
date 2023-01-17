import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Viewer = () => {
  return (
    <div className="generated-images-viewer">
      <div className="time-counter">Images generated using Stability AI in 4.10 seconds</div>
      <div className="main-image"></div>
      <div className="thumbnails-container">
        <div className="thumbnail"></div>
        <div className="thumbnail locked">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="thumbnail locked">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="thumbnail locked">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="thumbnail locked">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="thumbnail locked">
          <FontAwesomeIcon icon={faLock} />
        </div>
      </div>
    </div>
  );
};

export default Viewer;
