import Header from '../components/header/Header';
import { NavLink } from 'react-router-dom';
const Home = () =>{
    return(
            <div>
              <Header/>
                <main className="section">
                    <div className="container">
                    
                            <ul className="content-list">
                                <li className="content-list__item">
                                    <h2 className="title-2">Наше издание подготовило для вас 7 различных номинаций</h2>
                                    <p>В каждой из которых мы выделили ваших любимых артистов</p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="title-2">Чтобы выявить лучших из лучших вам необходимо проголосовать!</h2>
                                    <NavLink to='/nomination' className="btn">Проголосовать</NavLink>
                                    {/* <a href="/projects.html" className="btn">Проголосовать!</a> */}
                                </li>
                            </ul>
                            
                    </div>
                </main>
        </div>
    );
}

export default Home;
