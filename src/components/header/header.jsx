import './header.css'

const Header = () =>{
    return(
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Итоги года 2022 </strong>проголосуй за <p>любимую песню</p>
            </h1>

            <a href="/projects.html" className="btn">Проголосовать!</a>
        </div>
    </header>
    );
}

export default Header;
