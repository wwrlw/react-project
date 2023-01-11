import './styles/main.css';
import './img/main-image.jpg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/navbar/Navabar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Nomination from './pages/Nomination';
import Contact from './pages/Contact';
import Nomination_detail from './pages/Nomination_detail';


function App() {
  return (
    <div className="App"> 
          

    <Router>
    <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/nomination' element={<Nomination/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/nomination_detail' element={<Nomination_detail/>}></Route>
        </Routes>

          <Footer/>
    </Router>





    </div>
  );
}

export default App;
