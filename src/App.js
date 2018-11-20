//import dependencies and files

import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Row from "./Row"
import Column from "./Column"
import Jumbo from "./components/Jumbo";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import characters from "./characters.json"


//sets state to 0

class App extends Component {
  state = {
    characters,
    characterClicked: [],
    score: 0
  }


  //on click a logo will be taken out of array

  imageClick = event => {
    const currentChar = event.target.alt;
    console.log(currentChar)
    const imageChosen = this.state.characterClicked.indexOf(currentChar) > -1;
    console.log(imageChosen)

    // if you click on logo that has already been selected, the game resets

    if (imageChosen) {
      this.setState({
        characters: this.state.characters.sort(function (a, b) {
          return 0.5 - Math.random()
        }),
        characterClicked: [],
        score: 0
      })
      alert("you Lose")

      // if you click on an available logo, your score is increase and cards shuffled

    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function (a, b) {
            return .5 - Math.random();
          }),
          characterClicked: this.state.characterClicked.concat(currentChar),
          score: this.state.score + 1
        },
        //if you get all 12 logo correct you get a message you won
        () => {
          if (this.state.score === 12) {
            alert("you win");
            this.setState({
              characters: this.state.characters.sort(function (a, b) {
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

  //the way the page will render al the components

  render() {
    return (
      <div>
        <Jumbo />
        <NavBar
          score={this.state.score} />
        
        <div className="wrapper">
        <Row>
          {this.state.characters.map(item => (
            <Column size = "md-3 sm-10">
            <CharacterCard
              imageClick={this.imageClick}
              id={item.name}
              key={item.name}
              image={item.img}
            />
            </Column>
          ))}
          </Row>
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
