import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './layout/header';
import Home from 'layout/home';
import SignUp from 'components/signup';
import Login from 'components/login';
import Main from 'components/main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
