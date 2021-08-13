import React, { Component } from 'react';

import './Header.css';

import logo from './assets/logo.png';


class Header extends Component {
  
    render() { 
        return ( <div>
            <header className="header">
            <section className="title">
            <img className='logo' src={logo} alt='logo'/>
            <span className="delicious">Delicious</span>
            <br></br>
            <span className="blog">THE BEST FOOD BLOG ON THE WEB</span>
            
           
             
              </section>
            </header>
            </div> 
        );
    }
}
 
export default Header;
