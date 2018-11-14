import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
//import characters from "./characters.json"



class App extends Component{
render() {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <CharacterCard />
      <Footer />
    </div>
    
  );
}
}

export default App;
