import React, { Component } from 'react';

import Ingredientslist1 from './IngredientsItem1.js';
import IngredientsList2 from './IngredientsItem2.js';

class Ingredients extends Component {
    state = {  }
    render() { 
        return ( 
            <>
<section className="ingredients">

<Ingredientslist1 className='ingredients-list' />
<IngredientsList2 className='ingredients-list2' />
</section>

            </>

         );
    }
}
 
export default Ingredients;