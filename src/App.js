import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import characters from "./characters.json"




class App extends Component{
  state = {
    characters,
    characterClicked: [],
    score: 0
  }

  imageClick = event => {
    const currentChar = event.target.alt;
      console.log(currentChar)
    const imageChosen = this.state.characterClicked.indexOf(currentChar) > -1;
      console.log(imageChosen)

  if(imageChosen){
    this.setState({
      characters: this.state.characters.sort(function(a, b){
        return 0.5 - Math.random()
      }),
      characterClicked: [],
      score: 0
    })
    alert("you Lose")
  }else {
    this.setState(
      {
        characters: this.state.characters.sort(function(a, b) {
          return .5 - Math.random();
        }),
        characterClicked: this.state.characterClicked.concat(currentChar),
        score: this.state.score + 1
      },

      () => {
        if(this.state.score === 12){
          alert("you win");
          this.setState({
            characters: this.state.characters.sort(function(a, b){
              return .5 - Math.random();
            }),
            characterClicked: [],
            score: 0
          })
        }
      }
    )
  }
}

render() {
  return (
    <div>
      <NavBar
      score = {this.state.score} />
      <Jumbo />
      <div className = "wrapper">
        {this.state.characters.map(character => (
        <CharacterCard 
        imageClick = {this.imageClick}
        id = {character.id}
        key = {character.id}
        image = {character.img}
        />   
        ))}
      
      </div> 
      <Footer />
    </div>
    
  );
}
}

export default App;
