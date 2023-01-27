import { useState, useEffect } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import Thumbnails from 'components/thumbnails';
import Thumbnail from 'assets/images/thumbnail.png';
import './index.scss';

const Viewer = ({ fullSize, thumb1, thumb2, thumb3, status, duration, authenticated, subscription }) => {
  const [mainUrl, setMainUrl] = useState('');
  return (
    <div className="generated-images-viewer">
      <div className="time-counter">
        Images generated using
        <br />
        Stability AI in {duration ? duration.toFixed(2) : '0'} seconds
      </div>
      <div className="image-generate-container">
        <div className="generator-header">
          <img className="main-image" src={status === 'success' ? fullSize : Thumbnail} alt="Full Size"></img>
          <div className="thumbnails-container">
            <img className="thumbnail" src={status === 'success' ? thumb1 : Thumbnail} alt="Thumb1"></img>
            <div className={cx('thumbnail', { locked: !subscription })}>
              <img src={status === 'success' && subscription ? thumb2 : Thumbnail} alt="" />
              {!subscription && <FontAwesomeIcon icon={faLock} />}
            </div>
            <div className={cx('thumbnail', { locked: !subscription })}>
              <img src={status === 'success' && subscription ? thumb3 : Thumbnail} alt="" />
              {!subscription && <FontAwesomeIcon icon={faLock} />}
            </div>
            <div className={cx('thumbnail', { locked: !subscription })}>
              <img src={status === 'success' && subscription ? thumb2 : Thumbnail} alt="" />
              {!subscription && <FontAwesomeIcon icon={faLock} />}
            </div>
            <div className={cx('thumbnail', { locked: !subscription })}>
              <img src={status === 'success' && subscription ? thumb3 : Thumbnail} alt="" />
              {!subscription && <FontAwesomeIcon icon={faLock} />}
            </div>
            <div className={cx('thumbnail', { locked: !subscription })}>
              <img src={status === 'success' && subscription ? thumb1 : Thumbnail} alt="" />
              {!subscription && <FontAwesomeIcon icon={faLock} />}
            </div>
          </div>
          <Thumbnails
            thumb1={thumb1}
            thumb2={thumb2}
            thumb3={thumb3}
            status={status}
            authenticated={authenticated}
            subscription={subscription}
          />
        </div>
        {(authenticated || subscription) && (
          <div className="tag-container">
            <input type="text" placeholder="#tags" />
            <div className="tag-button">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewer;
