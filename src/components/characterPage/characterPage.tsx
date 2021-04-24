import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import ErrorMessage from "../error-message/errorMessage";
import GotService from "../../services/index";
import { Characters, Books, Houses } from "../../interfaces/index";

export default class CharacterPage extends Component {
  gotService = new GotService();
  state = {
    selectedChar: 130,
    error: false,
  };
  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <>
        <ItemList
          getData={this.gotService.getAllCharacters}
          renderItem={(item: Characters) => `${item.name} ${item.gender} ${item.culture}`}
        />
        <ItemList getData={this.gotService.getAllBooks}
        renderItem={(item: Books) => `${item.name} ${item.country} ${item.numberOfPages}`}/>
        <ItemList getData={this.gotService.getAllHouses}
        renderItem={(item: Houses) => `${item.name} ${item.words} ${item.overlord}`}/>
      </>
    );
  }
}
