import React, { Component } from 'react';

class Ingredients extends Component {
    state = {  }
    render() { 
        return ( 
            <>
<section className="ingredients">
<span className="ingredients-list">1 1/2 cups milk </span>
<span className="ingredients-list">1/2 cup mascarpone</span>
<span className="ingredients-list">1/2 tsp pink salt</span>
<span className="ingredients-list">1/2 cup brown sugar</span>
<span className="ingredients-list">1 lb black mission figs</span>
<span className="ingredients-list">2-4 Tbsp water</span>
<span className="ingredients-list2">1 1/2 cups heavy cream</span>

<span className="ingredients-list2" id="strike">1/3 cup granulated sugar</span>
<span className="ingredients-list2">1 lemon, juiced</span>
<span className="ingredients-list2" id="strike2">2 egg yolks</span>
<span className="ingredients-list2">2 Tbsp butter</span>
<span className="ingredients-list2">1 cup honey roasted pecans, roughly chopped</span>
</section>

            </>

         );
    }
}
 
export default Ingredients;