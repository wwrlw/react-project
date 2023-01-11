import './nominate.css';
import { NavLink } from 'react-router-dom';

const Nominate = ({title, img}) =>{
    return(
        
            <NavLink to='/nomination_detail'>
                <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
        </li>
            </NavLink>

        
    );
}
export default Nominate;
