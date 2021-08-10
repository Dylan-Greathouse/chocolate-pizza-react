import React, { Component } from 'react';

import './Body.css';

import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';


class Body extends Component {
   
    render() { 
        return ( 
            <div>
                   <h1>Chocolate Pizza</h1>
            <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
            
            <section className="print-section">
            <h2 className="print-txt">PRINT</h2>
            <img className="print-img"src={print} alt="print"/>
            </section>
            
            <section className="pizza-img">
            <img className="pizza" src={pizza} alt="pizza"/>
            </section>
            <section className="main-section">
<section className="p-section">
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
<p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
</section>

</section>
</div>
         );
    }
}
 
export default Body;