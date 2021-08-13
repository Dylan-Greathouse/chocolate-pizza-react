import React, { Component } from 'react';
import './Header.css';

import faceBook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import googlePlus from './assets/gp-icon.png';
import instagram from './assets/insta-icon.png';
import flickr from './assets/flic-icon.png';
import pintrest from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';



class ButtonList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
             <section className="iconz">
             <section className="icons-section">
             <img src={faceBook} alt="facebook"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={googlePlus}alt="google plus"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={flickr} alt="flickr"/>
                        <img src={pintrest} alt="pintrest"/>
                        </section>
            
                        <section className="icons-section2">
                        <img src={rss} alt="rss"/>
                        <img src={mail} alt="mail"/>
                        </section>
                    </section>
           
            </>
         );
    }
}
 
export default ButtonList;