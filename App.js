import React from 'react';
import './App.css';
import CopyRight from './components/copyRight/copyRight';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Projects from './components/projectsList';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Projects />
      <Footer/>
      <CopyRight />
    </div>
  );
}

export default App;
