import poster1 from '../img/posters/poster-1.png'
import poster7 from '../img/posters/poster-7.png'
import poster8 from '../img/posters/poster-8.png'
import poster9 from '../img/posters/poster-9.png'
import poster10 from '../img/posters/poster-10.jfif'
import poster11 from '../img/posters/poster-11.jfif'
import { NavLink } from 'react-router-dom'


const  Nomination_detail =()=>{
    return(
    
        <main className="section">
        <div className="container">
            <h2 className="title-1">Артисты</h2>
            <ul className="projects">
                <li className="project">
                        <img src={poster1} alt="Project img" className="project__img"/>
                        <h3 className="project__title">MACAN</h3>
                        <NavLink to='/lk' className="btn">Проголосовать</NavLink>
                </li>
                <li className="project">
                        <img src={poster7} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Егор Крид</h3>
                        <NavLink to='/lk' className="btn">Проголосовать</NavLink>
                </li>
                <li className="project">
                        <img src={poster8} alt="Project img" className="project__img"/>
                        <h3 className="project__title">Bushido zho
                        </h3>
                        <NavLink to='/lk' className="btn">Проголосовать</NavLink>
                </li>

                <li className="project">
                    <img src={poster9} alt="Project img" className="project__img"/>
                    <h3 className="project__title">Xcho</h3>
                    <NavLink to='/lk' className="btn">Проголосовать</NavLink>
                    
                </li>
                <li className="project">
                    <img src={poster10} alt="Project img" className="project__img"/>
                    <h3 className="project__title">Big baby tape</h3>
                    <NavLink to='/lk' className="btn">Проголосовать</NavLink>

                </li>
                <li className="project">
                    <img src={poster11} alt="Project img" className="project__img"/>
                    <h3 className="project__title">Morgenshtern</h3>
                    <NavLink to='/lk' className="btn">Проголосовать</NavLink>
                </li>
            
            </ul>
        </div>
    </main>

    )
};
export default Nomination_detail;
