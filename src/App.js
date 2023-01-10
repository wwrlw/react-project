import './styles/main.css';
import './img/main-image.jpg'

import twitter from './img/icons/twitter.svg';
import vk from './img/icons/vk.svg';
import gitHub from './img/icons/gitHub.svg';
import instagram from './img/icons/instagram.svg'
import linkedIn from './img/icons/linkedIn.svg'

import Navbar from './components/navbar/Navabar';


function App() {
  return (
    <div className="App">
          
        <Navbar/>
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Итоги года 2022 </strong>проголосуй за <p>любимую песню</p>
            </h1>

            <a href="/projects.html" className="btn">Проголосовать!</a>
        </div>
    </header>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Наше издание подготовило для вас 7 различных номинаций</h2>
                        <p>В каждой из которых мы выделили ваших любимых артистов</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Чтобы выявить лучших из лучших вам необходимо проголосовать!</h2>
                        
                        <a href="/projects.html" className="btn">Проголосовать!</a>
                    </li>
                </ul>
                
        </div>
    </main>

    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 online-nominate.com</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
