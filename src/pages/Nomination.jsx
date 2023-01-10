
// import poster2 from  '../img/posters/poster-2.png'
// import poster3 from  '../img/posters/poster-3.png'
// import poster4 from '../img/posters/poster-4.png'
// import poster5 from '../img/posters/poster-5.png'
// import poster6 from '../img/posters/poster-6.png'
import Header from '../components/header/Header';
import Nominate from '../components/Nominate/Nomnate';

const Nomination = () =>{
    return(
        <div>

<Header/>

<main className="section">
<div className="container">
    <h2 className="title-1">Номинации:</h2>
    <ul className="projects">
        <Nominate/>
        <Nominate/>
        <Nominate/>

        
        
        {/* <li className="project">
            <a href="/project-page1.html">
                <img src={poster2} alt="Project img" className="project__img"/>
                <h3 className="project__title">Артистка года</h3>
            </a>
        </li>
        <li className="project">
            <a href="/project-page1.html">
                <img src={poster3} alt="Project img" className="project__img"/>
                <h3 className="project__title">Группа года</h3>
            </a>
        </li>

        <li className="project">
            <a href="/project-page1.html"></a>
                <img src={poster4} alt="Project img" className="project__img"/>
                <h3 className="project__title">Альбом года</h3>
        </li>
        <li className="project">
            <a href="/project-page1.html"></a>
                <img src={poster5} alt="Project img" className="project__img"/>
                <h3 className="project__title">Трек года</h3>
        </li>
        <li className="project">
            <a href="/project-page1.html"></a>
                <img src={poster6} alt="Project img" className="project__img"/>
                <h3 className="project__title">Фит года</h3>
        </li>

    </ul> */}
    </ul>
</div>
</main>

        </div>
       
            );
}
export default Nomination;
