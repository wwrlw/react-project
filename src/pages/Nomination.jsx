
import '../styles/main.css'
import Header from '../components/header/Header';
import Nominate from '../components/Nominate/Nomnate';
import {nomination} from '../components/help-elements/NominationList';
import { useState } from 'react';

// const [value, setValue] = useState()
// const filterNomination = nomination.filter(nomination =>{
//     return nomination.title.toLocaleLowerCase().includes(value.toLowerCase())
// })

// function useState(){
//     const [value, setValue] = useState() 
//     const filterNomination = nomination.filter(nomination =>{
//         return nomination.title.toLocaleLowerCase().includes(value.toLowerCase())
//     })
// }
const Nomination = () =>{
    return(

    <div>
        <Header/>
            <main className="section">
                <div className="container">
                <h2 className="title-1">Номинации:</h2>
                <ul className="projects">

            {filterNomination.map((nomination, index) =>{
                    return(
                        <Nominate
                        key={index}
                        title={nomination.title} img={nomination.img}/>
                    )

                    
                })}

                </ul>
                <div class="form">
                        <form class="search__form">
                                <input type="text" placeholder="Введите название чего то там" 
                                class="search__input"
                                onChange={(event) => setValue(event.target.value)}/>
                                <img src='#' alt="" class="search-icon"/>
                        </form>
                    </div>
                </div>
            </main>

    </div>
       
            );
            
}


export default Nomination;
