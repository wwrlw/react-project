import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

const Navbar = () =>{
    return (
        <nav className="nav">
        <div className="container">
            <div class="nav-row">
                <a href="./index.html" className="logo">NoVo</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Домашняя страница</a></li>
                    <li className="nav-list__item"><a href="./projects.html" className="nav-list__link">Номинации</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Контакты</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
