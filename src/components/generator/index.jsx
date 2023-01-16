import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faShuffle, faXmark } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Generator = () => {
  return (
    <div className="generator-container">
      <div className="generator-content">
        <div className="keyword-form">
          <input placeholder="Describe image here" />
          <FontAwesomeIcon icon={faXmark} />
          <FontAwesomeIcon icon={faShuffle} />
          <div className="generate-button">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <p>GENERATE</p>
          </div>
        </div>
      </div>
      <div className="tool-box"></div>
    </div>
  );
};

export default Generator;
