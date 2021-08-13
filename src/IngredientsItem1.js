import React, { Component } from 'react';
import ingredients1 from './ingredients1Data';




class Ingredientslist1 extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
                {ingredients1.map((item) => {
                   return <li>{item.amount} {item.name}</li>
                    
                })}
            </ul>
         );
    }
}
 
export default Ingredientslist1;