import { useState, useEffect } from 'react';
import cx from 'classnames';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faShuffle, faXmark, faLock, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Viewer from 'components/viewer';
import Toolbox from 'components/toolbox';
import axios from 'axios';

import './index.scss';

const beforeGenerate = <div className="before-generate">AI Generated Image will appear here</div>;

const Generator = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState('');
  const [checkedState, setCheckedState] = useState({
    fantasy: false,
    anime: false,
    pencil: false,
    nouveau: false,
    watercolor: false,
    deco: false,
    acrylic: false,
  });
  const lockedStyles = ['watercolor', 'deco', 'acrylic'];
  const [imgUrl, setImgUrl] = useState(null);
  const [thumb1Url, setThumb1Url] = useState(null);
  const [thumb2Url, setThumb2Url] = useState(null);
  const [thumb3Url, setThumb3Url] = useState(null);
  const [flag, setFlag] = useState(false);
  const [generation, setGeneration] = useState(false);
  const [data, setData] = useState({});
  const [cookies, setCookie] = useCookies(['member']);

  const authenticated = false;
  const subscription = true;
  const userWith = 'test-dev_zurix@dispostable.com|33ac124ba83f26d883a355f76cf4a656';
  const userWo = 'test-dev_luqiwaq@dispostable.com|580673b1e28ae7f9282781e62a21804e';

  useEffect(() => {
    setCookie('aiwp_logged_in', userWith, { path: '/' });
  }, []);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const removeDescription = () => {
    setDescription('');
  };

  const loadImage = (url) => {
    return new Promise((res, rej) => {
      const image = new Image();
      image.src = url[0];
      image.onload = () => {
        setImgUrl(image.src);
        setThumb1Url(url[0]);
        setThumb2Url(url[1]);
        setThumb3Url(url[2]);
        res();
      };
      image.onerror = (e) => {
        console.warn('image was not loaded', e);
        rej();
      };
    });
  };

  const generateImage = async () => {
    try {
      setLoading(true);
      const { fantasy, anime, pencil, nouveau, watercolor, deco, acrylic } = checkedState;

      if (description.length) {
        setGeneration(true);
        const response = await axios.get(
          `/${description}/${fantasy}/${anime}/${pencil}/${nouveau}/${watercolor}/${deco}/${acrylic}`
        );
        const { data } = response;
        setResponseStatus(data.status);
        await loadImage(data.output);
        setData(data);
        console.log(data);
        setLoading(false);
      } else {
        alert('Please type text description');
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleToggle = (key) => {
    if (subscription || !lockedStyles.includes(key)) {
      setCheckedState((s) => ({ ...s, [key]: !s[key] }));
    } else {
      return;
    }
  };

  const expandStyles = () => {
    setFlag(!flag);
  };

  return (
    <div className="generator-container">
      <div className="generator-content">
        <div className="keyword-form">
          <input placeholder="Describe image here" onChange={handleDescription} value={description} />
          <div className="utils-box">
            {description.length ? <FontAwesomeIcon icon={faXmark} className="xMark" onClick={removeDescription} /> : ''}
            <FontAwesomeIcon icon={faShuffle} className="faShuffle" />
            <div className="generate-button" onClick={generateImage}>
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <p>GENERATE</p>
            </div>
          </div>
        </div>
        <div className="styles-container">
          <div className="styles-container-title">ADD STYLE:</div>
          <div className={cx('style-items', { open: flag })}>
            {Object.keys(checkedState).map((key) => (
              <div
                className={cx(key, { active: checkedState[key] }, { locked: lockedStyles.includes(key) && !subscription })}
                onClick={() => handleToggle(key)}
              >
                {key}
                {!subscription && lockedStyles.includes(key) && <FontAwesomeIcon icon={faLock} />}
              </div>
            ))}
          </div>
          <FontAwesomeIcon icon={faAngleDown} className="angleDown" onClick={expandStyles} />
        </div>
      </div>
      {generation ? (
        <Viewer
          fullSize={imgUrl}
          thumb1={thumb1Url}
          thumb2={thumb2Url}
          thumb3={thumb3Url}
          status={responseStatus}
          duration={data.generationTime}
          authenticated={authenticated}
          subscription={subscription}
        />
      ) : (
        <div className="images-container">{beforeGenerate}</div>
      )}
      <div className="tool-box">
        <Toolbox authenticated={authenticated} subscription={subscription} />
      </div>
    </div>
  );
};

export default Generator;
