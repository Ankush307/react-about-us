import './App.css';
import AboutUs from './components/about/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUS' element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
