import './nominate.css';
import poster1 from '../../img/posters/poster-1.png'

const Nominate = () =>{
    return(
        <div>
            <li className="project">
            <a href="/project-page1.html">
                <img src={poster1} alt="Project img" className="project__img"/>
                <h3 className="project__title">Артист года</h3>
            </a>
        </li>
        </div>
    );
}
export default Nominate;
