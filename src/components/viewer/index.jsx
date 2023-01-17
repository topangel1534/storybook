import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Viewer = () => {
  return (
    <div className="generated-images-viewer">
      <div className="time-counter">Images generated using Stability AI in 4.10 seconds</div>
      <div className="image-generate-container">
        <div className="generator-header">
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
        <div className="tag-container">
          <input type="text" placeholder="#tags" />
          <div className="tag-button">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
