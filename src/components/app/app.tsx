import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import OldForm from '../old-form/old-form'
import GotService from "../../services/index";
import RandomChar from "../random-char/random-char";
import CharacterPage from '../characterPage/characterPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      showRandomChar: true,
    };
    this.toggleRandomChar = this.toggleRandomChar.bind(this)
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar
      };
    });
  };

  render() {
    const someCharacter = new GotService();
    someCharacter.getAllCharacters().then((res) => res);
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    return (
      <Router>
      <div className="container mx-auto h-full flex flex-col gap-y-4">
        {/* <AppHeader liked={liked} allPosts={allPosts} /> */}

        {char}
        <button
          onClick={this.toggleRandomChar}
          className="px-5 py-3 border border-blue text-blue rounded"
        >
          CHANGE
        </button>

        <CharacterPage/>
        <CharacterPage/>
        <CharacterPage/>

        <Route path="/search" component={OldForm}>

        </Route>

        </div>
      </Router>
    );
  }
}
