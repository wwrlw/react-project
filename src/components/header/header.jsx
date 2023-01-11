import './header.css'
import { NavLink} from 'react-router-dom';

const Header = () =>{
    return(
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Итоги года 2022 </strong>проголосуй за <p>любимую песню</p>
            </h1>
            <NavLink to='/nomination' className="btn">Проголосовать</NavLink>
        </div>
    </header>
    );
}

export default Header;
