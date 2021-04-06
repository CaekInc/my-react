import React, { Component } from "react";
import GotService from "../../services";

export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateChar();
  }

  gotService = new GotService();

  state = {
    char: {}
  };

  onCharLoaded = (char: any) => {
    this.setState({char});
  }

   updateChar() {
    const id = Math.floor(Math.random() * 140 + 40);
    this.gotService.getCharacter(id).then(this.onCharLoaded);
  }

  render() {
    const { char: { name, gender, born, died, culture }} = this.state;

    return (
      <div className="container py-4">
        <h2 className="text-3xl">Random Charcter: {name}</h2>
        <ul className="flex flex-col gap-4 text-2xl font-semibold">
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            Gender {gender}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            where born {born}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            when died {died}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600">
            Culture {culture}
          </li>
          <li className="p-3 border-2 rounded border-black text-black bg-red-600"></li>
        </ul>
      </div>
    );
  }
}
