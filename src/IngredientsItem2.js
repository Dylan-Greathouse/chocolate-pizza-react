import React, { Component } from 'react';
import ingredients2 from './Ingredients2Data.js';

class IngredientsList2 extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
            {ingredients2.map((item) => {
               return <li>{item.amount} {item.name}</li>
                
            })}
        </ul>
         );
    }
}
 
export default IngredientsList2;