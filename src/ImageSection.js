import React, { Component } from 'react';

import './Body.css';

import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';


class ImageSection extends Component {
   
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
          
</div>
         );
    }
}
 
export default ImageSection;