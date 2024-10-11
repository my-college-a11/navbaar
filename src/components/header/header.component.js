import React from 'react';
import './style.css'
import bgimg from '../../img/girl.jpeg'
const Header = () =>{
    return(
        <header>
            <div class="container">
                <div class="left">
                <h1>Learn Code <br/> <span>Increase Your</span> <br/> knowledge </h1>
                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                 <a href="#" class="btn">Explore Course</a>
                </div>
                <div class="right">
                    <img src={bgimg} alt="Image"/>
                </div>
            </div>
        </header>
    )
}

export default Header;