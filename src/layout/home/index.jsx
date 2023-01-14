import Generator from 'components/generator';

import './index.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">Storybook AI</div>
      <Generator />
    </div>
  );
};

export default Home;
