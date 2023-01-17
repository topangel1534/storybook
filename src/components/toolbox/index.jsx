import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Toolbox = () => {
  return (
    <div className="toolbox">
      <div className="save-button">
        <FontAwesomeIcon icon={faSave} />
        SAVE
      </div>
    </div>
  );
};

export default Toolbox;
