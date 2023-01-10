import './nominate.css';
import poster1 from '../../img/posters/poster-1.png'


const Nominate = ({title, img}) =>{
    return(
        <div>
            <li className="project">
            <a href="/project-page1.html">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
        </div>
    );
}
export default Nominate;
