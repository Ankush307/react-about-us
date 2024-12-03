import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './view/Count';
import AboutPage from './view/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='count' element={<Count />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
