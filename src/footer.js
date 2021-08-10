import React, { Component } from 'react';

import divider from './assets/Capture.PNG';
import vanessa from './assets/van-pic.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section className="divider2">
<img src={divider} alt='divider'/>
</section>


<section className="vanessa">
<section className="vanessa-img">
    <img src={vanessa} alt='vanessa'/>
</section>

<section className="vanessa-name">
<span className="name">Vanessa Stevenson</span>
<br></br>
<span className="bio">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
</section>


<section className="vanessa-btn">
<button className="btn">SHARE RECIPE</button>
</section>

</section>
          </>
         );
    }
}
 
export default Footer;