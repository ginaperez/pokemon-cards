import React from 'react';
import axios from "axios";
import './App.css';

// https://api.pokemontcg.io/v1/cards

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cardCollection: [
        {
          name: "Cubone",
          imageUrl: "https://images.pokemontcg.io/dp6/90.png"
        },
        {
          name: "Windstorm",
          imageUrl: "https://images.pokemontcg.io/ex14/85.png"
        },
        {
          name: "Turtwig",
          imageUrl: "https://images.pokemontcg.io/pop9/17.png"
        }
      ]
    };
    }
  
    componentDidMount() {
      axios.get("https://api.pokemontcg.io/v1/cards").then((response) => {
        this.setState({
          cardCollection: response.data.cards
        })
      })
    }
  
    render() {
    const {cardCollection} = this.state;
    const mappedCards = cardCollection.map(card => {
      return (
      <div key={card.imageUrl} className="poke-card">
        <img src={card.imageUrl} />
        <div>{card.name}</div>
      </div>
      );
    });
    return (
      <div className="App">{mappedCards}</div>
    );
  }
}

export default App;
