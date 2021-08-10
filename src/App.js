import React from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './footer.js'
import Ingredients from './Ingredients';
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Ingredients />
      <Footer />
    </div>

  );
}

export default App;
