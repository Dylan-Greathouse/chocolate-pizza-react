import React, { Component } from 'react';

import divider from './assets/Capture.PNG';

class Divider extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="divider">
            <img src={divider} alt="divider"/>
          </section>
         );
    }
}
 
export default Divider;