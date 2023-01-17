import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faShuffle, faXmark, faLock } from '@fortawesome/free-solid-svg-icons';
import Viewer from 'components/viewer';
import Toolbox from 'components/toolbox';
import './index.scss';

const beforeGenerate = <div className="before-generate">AI Generated Image will appear here</div>;

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
        <div className="styles-container">
          <div className="styles-container-title">ADD STYLE:</div>
          <div class="fantasy">Fantasy</div>
          <div class="anime active">Anime</div>
          <div class="pencil">Pencil</div>
          <div class="nouveau">Nouveau</div>
          <div class="watercolor locked">
            Watercolor
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div class="deco locked">
            Deco
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div class="acrylic locked">
            Acrylic
            <FontAwesomeIcon icon={faLock} />
          </div>
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
