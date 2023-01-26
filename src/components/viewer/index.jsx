import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import Thumbnails from 'components/thumbnails';
import Thumbnail from 'assets/images/thumbnail.png';
import './index.scss';

const Viewer = ({ fullSize, thumb1, status, duration }) => {
  const [mainUrl, setMainUrl] = useState('');
  return (
    <div className="generated-images-viewer">
      <div className="time-counter">
        Images generated using Stability AI in {duration ? duration.toFixed(2) : '0'} seconds
      </div>
      <div className="image-generate-container">
        <div className="generator-header">
          <img className="main-image" src={status === 'success' ? fullSize : Thumbnail} alt="Full Size"></img>
          <div className="thumbnails-container">
            <img className="thumbnail" src={status === 'success' ? thumb1 : Thumbnail} alt="Thumb1"></img>
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
          <Thumbnails />
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
