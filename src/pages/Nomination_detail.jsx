import image from '../img/posters/poster-1.png'



const  Nomination_detail =()=>{
    return(
    
        <main className="section">
        <div className="container">
            <h2 className="title-1">Артисты</h2>
            <ul className="projects">
                <li className="project">
                        <img src={image} alt="Project img" className="project__img"/>
                        <h3 className="project__title">MACAN</h3>
                </li>
                <li className="project">
                        <img src="/img/posters/poster-7.png" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Егор Крид</h3>
                </li>
                <li className="project">
                        <img src="/img/posters/poster-8.png" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Bushido zho</h3>
                </li>

                <li className="project">
                    <img src="/img/posters/poster-9.png" alt="Project img" className="project__img"/>
                    <h3 className="project__title">Xcho</h3>
                </li>
                <li className="project">
                    <img src="/img/posters/poster-10.jfif" alt="Project img" className="project__img"/>
                    <h3 className="project__title">Big baby tape</h3>
                </li>
                <li className="project">
                    <img src="/img/posters/poster-11.jfif" alt="Project img" className="project__img"/>
                    <h3 className="project__title">Morgenshtern</h3>
                </li>

            </ul>
        </div>
    </main>

    )
};
export default Nomination_detail;
