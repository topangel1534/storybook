import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Thumbnail from 'assets/images/thumbnail.png';
import './index.scss';

const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 390, itemsToShow: 3, itemsToScroll: 2 },
];

const Item = styled.div`
  height: 76px;
  width: 71px;
  border: 1px solid #000000;
  border-radius: 5px;

  &.locked {
    position: relative;
    opacity: 0.5;
    background-color: #d9d9d9;
    svg {
      position: absolute;
      right: 11px;
      top: 11px;
      padding: 10px;
      border-radius: 20px;
      background-color: #fff;
    }
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const Thumbnails = ({ thumb1, thumb2, thumb3, status, subscription }) => {
  const [items, setItems] = useState([thumb1, thumb2, thumb3, thumb1, thumb2, thumb3]);
  useEffect(() => {
    setItems([thumb1, thumb2, thumb3, thumb1, thumb2, thumb3]);
  }, [status, thumb1]);
  return (
    <div className="thumbnails">
      <Carousel breakPoints={breakPoints}>
        {items.map((item, index) => (
          <Item key={index} className="thumbnail-item">
            <img src={status === 'success' && (index === 0 || subscription) ? item : Thumbnail} alt={`${index}`} />
            {index !== 0 && !subscription && <FontAwesomeIcon icon={faLock} />}
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Thumbnails;
