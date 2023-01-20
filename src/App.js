import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './layout/header';
import Home from 'layout/home';
import SignUp from 'components/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
