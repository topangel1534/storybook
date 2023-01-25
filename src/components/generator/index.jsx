import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faShuffle, faXmark, faLock, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Viewer from 'components/viewer';
import Toolbox from 'components/toolbox';
import Api from 'utils/api';

import './index.scss';

// const beforeGenerate = <div className="before-generate">AI Generated Image will appear here</div>;

const Generator = () => {
  const [description, setDescription] = useState('');
  const [checkedState, setCheckedState] = useState({
    fantasy: false,
    anime: false,
    pencil: false,
    nouveau: false,
    watercolor: false,
    deco: false,
    acrylic: false,
  });

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const removeDescription = () => {
    setDescription('');
  };

  const generateImage = async () => {
    try {
      // const response = await Api.get(
      //   `/images/${description}/${checkedState.fantasy}/${checkedState.anime}/${checkedState.pencil}/${checkedState.nouveau}/${checkedState.watercolor}/${checkedState.deco}/${checkedState.acrylic}`
      // );
      // console.log(response);
    } catch (error) {
      console.log(error.response);
    }
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
          <div className="style-items">
            <div className="fantasy">Fantasy</div>
            <div className="anime active">Anime</div>
            <div className="pencil">Pencil</div>
            <div className="nouveau">Nouveau</div>
            <div className="watercolor locked">
              Watercolor
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="deco locked">
              Deco
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="acrylic locked">
              Acrylic
              <FontAwesomeIcon icon={faLock} />
            </div>
          </div>
          <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
        </div>
      </div>
      {/* <div className="images-container">{beforeGenerate}</div> */}
      <Viewer />
      <div className="tool-box">
        <Toolbox />
      </div>
    </div>
  );
};

export default Generator;
