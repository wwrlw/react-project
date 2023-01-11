import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{


    return (
        <nav className="nav">
        <div className="container">
            <div class="nav-row">
                <NavLink to='/' className="logo">
                    <a>NoVo</a>
                </NavLink>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <NavLink to='/' className='nav-list__link'>Домашняя страница</NavLink>

                    <NavLink to='/nomination' className='nav-list__link'>Номинации</NavLink>

                    <NavLink to='/contact' className='nav-list__link'>Контакты</NavLink>

                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
