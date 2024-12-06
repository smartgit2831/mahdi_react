import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import GameColor from './pages/GameColor';
import Question from './pages/Question';
import Car from './pages/Car';
import Header from './component/Header';
import Captcha from './pages/Captcha';

import Footer from './component/Footer';
import Orginal from './pages/Orginal';



function App() {
  return (
    <div className={'App'} >
      <BrowserRouter>
        
        <Header/>

        <Routes>
          <Route path='/mahdi_react' element={<Orginal/>}/>
          <Route path='/chistan' element={<Home/>}/>
          <Route path='/gamecolor' element={<GameColor/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/car' element={<Car/>}/>
          <Route path='/captcha' element={<Captcha/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
