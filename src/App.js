import './styles/main.css';
import './img/main-image.jpg'


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
          
        <Navbar/>
        {/* <Home/> */}
         {/* <Nomination/> */}
         <Nomination_detail/>
        {/* <Contact/> */}
        <Footer/>

    </div>
  );
}

export default App;
