import React from 'react';
import './App.css';
import './Body.css';
import Header from './Header.js';
import ImageSection from './ImageSection.js';
import Footer from './footer.js'
import Ingredients from './Ingredients.js';
import Recipe from './recipe.js';
import Divider from './Divider.js';
import ButtonList from './ButtonList';
function App() {
  return (
    <div className="App">
      <Header />
      <ButtonList />
      <Divider />
      <ImageSection />
      <Recipe />
      <Ingredients />
      <Divider />
      <Footer />
    </div>

  );
}

export default App;
