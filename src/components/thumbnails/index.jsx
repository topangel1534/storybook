import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

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
`;

const Thumbnails = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="thumbnails">
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Thumbnails;
