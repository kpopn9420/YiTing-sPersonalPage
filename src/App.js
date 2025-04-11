import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;